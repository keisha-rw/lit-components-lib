import * as path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { assert, fixture } from '@open-wc/testing';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/dom';
import { PdsFileUpload } from './file-upload';
import { PdsButton } from '../button/button';
import createSnapshots from '../../../../test/utils/snapshots';

initStoryshots({
  storyKindRegex: /File upload/,
  framework: 'web-components',
  configPath: path.join(__dirname, '../../../../.storybook'),
  asyncJest: true,
  test: createSnapshots,
});

describe('FileUpload unit tests', () => {
  let element: PdsFileUpload;

  beforeEach(async () => {
    element = await fixture('<pds-file-upload></pds-file-upload>');
  });

  beforeAll(() => {
    // The native HTML dialog is not yet supported by jest. See:
    // https://github.com/jsdom/jsdom/issues/3294
    HTMLDialogElement.prototype.show = jest.fn(function mock(
      this: HTMLDialogElement,
    ) {
      this.open = true;
    });

    HTMLDialogElement.prototype.showModal = jest.fn(function mock(
      this: HTMLDialogElement,
    ) {
      this.open = true;
    });

    HTMLDialogElement.prototype.close = jest.fn(function mock(
      this: HTMLDialogElement,
    ) {
      this.open = false;
    });
  });

  it('is an instance of PdsFileUpload', () => {
    expect(element).toBeInstanceOf(PdsFileUpload);
  });

  it('is accessible', async () => {
    await assert.isAccessible(element);
  });

  it('if singular file upload, it should read "Attach file"', async () => {
    element = await fixture('<pds-file-upload></pds-file-upload>');
    const label = element.shadowRoot?.querySelector(
      '.pds-c-file-upload__attach-files-label',
    )?.textContent;
    expect(label).toContain('Attach file');
  });

  it('if multiple file upload, it should read "Attach file"', async () => {
    element = await fixture('<pds-file-upload multiple></pds-file-upload>');
    const label = element.shadowRoot?.querySelector(
      '.pds-c-file-upload__attach-files-label',
    )?.textContent;
    expect(label).toContain('Attach files');
  });

  it('if multiple file upload, it can have two files', async () => {
    element = await fixture(
      '<pds-file-upload accept=".js,.pdf" multiple></pds-file-upload>',
    );
    const fileUpload = element.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;
    const file1 = new File([''], 'jest.config.js', {
      type: 'text/javascript',
      lastModified: 1645905842587,
    });
    const file2 = new File([''], 'sample.pdf', {
      type: 'application/pdf',
      lastModified: 1676655167087,
    });
    const multipleFiles = [file1, file2];
    await userEvent.upload(fileUpload, multipleFiles);
    expect(fileUpload.files).toHaveLength(2);
  });

  it('if single file upload, it cannot have two files', async () => {
    element = await fixture('<pds-file-upload accept=".js"></pds-file-upload>');
    const fileUpload = element.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;
    const file1 = new File([''], 'jest.config.js', {
      type: 'text/javascript',
      lastModified: 1645905842587,
    });
    const file2 = new File([''], 'sample.js', {
      type: 'text/javascript',
      lastModified: 1676655167087,
    });
    const multipleFiles = [file1, file2];
    await userEvent.upload(fileUpload, multipleFiles);
    expect(fileUpload.files).toHaveLength(1);
  });

  it('Checks if the replace modal appears and the file is getting replaced or the modal closes on clicking cancel and the file remains same', async () => {
    element = await fixture('<pds-file-upload accept=".js"></pds-file-upload>');
    const fileUpload = element.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;
    expect(element.uploadedFilesArray).toStrictEqual([]);
    const file1 = new File([''], 'jest.config.js', {
      type: 'text/javascript',
      lastModified: 1645905842587,
    });
    let newFile = [file1];
    await userEvent.upload(fileUpload, newFile);
    expect(element.uploadedFilesArray).toHaveLength(1);
    expect(element.currentFile).toContain('jest.config.js');
    const file2 = new File([''], 'sample.js', {
      type: 'text/javascript',
      lastModified: 1676655167087,
    });
    newFile = [file2];
    await userEvent.upload(fileUpload, newFile);
    expect(element.uploadedFilesArray).toHaveLength(1);
    expect(element.hasAttachment).toBeTruthy();
    expect(element.replaceModal).toBeTruthy();
    expect(element.newFile).toContain('sample.js');
    const buttonEl = element.shadowRoot?.querySelector(
      '.pds-c-file-upload__replace',
    ) as PdsButton;
    buttonEl?.click();
    expect(element.currentFile).toContain('sample.js');

    const file3 = new File([''], 'sample1.js', {
      type: 'text/javascript',
      lastModified: 1676655167087,
    });
    newFile = [file3];
    await userEvent.upload(fileUpload, newFile);
    expect(element.replaceModal).toBeTruthy();
    expect(element.newFile).toContain('sample1.js');
    expect(element.uploadedFilesArray).toHaveLength(1);
    const buttonEl1 = element.shadowRoot?.querySelector(
      '.pds-c-file-upload__close-modal',
    ) as PdsButton;
    buttonEl1?.click();
    expect(element.currentFile).toContain('sample.js');
  });

  it('Check if the user uploads different file with same name, it displays in italic font', async () => {
    element = await fixture('<pds-file-upload accept=".js"></pds-file-upload>');
    const fileUpload = element.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;
    expect(element.uploadedFilesArray).toStrictEqual([]);
    expect(element.hasAttachment).toBeFalsy();
    const file1 = new File([''], 'jest.config.js', {
      type: 'text/javascript',
      lastModified: 1645905842587,
    });
    let newFile = [file1];
    await userEvent.upload(fileUpload, newFile);
    expect(element.modalState).toBeFalsy();
    expect(element.uploadedFilesArray).toHaveLength(1);
    expect(element.currentFile).toContain('jest.config.js');
    const file2 = new File([''], 'jest.config.js', {
      type: 'text/javascript',
      lastModified: 1676655167087,
    });
    newFile = [file2];
    await userEvent.upload(fileUpload, newFile);
    expect(element.uploadedFilesArray).toHaveLength(1);
    expect(element.hasAttachment).toBeTruthy();
    expect(element.replaceModal).toBeTruthy();
    expect(element.newFile).toContain('jest.config.js');
    const modalContent = JSON.stringify(element.notifyUser());
    expect(modalContent).toContain('jest.config.js');
    expect(modalContent).toContain('pds-c-file-upload__new-file');
  });

  it('Does not accept invalid file type', async () => {
    element = await fixture(
      '<pds-file-upload accept=".pdf"></pds-file-upload>',
    );
    const fileUpload = element.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;
    const file = new File([''], 'jest.config.js', {
      type: 'text/javascript',
      lastModified: 1645905842587,
    });
    await userEvent.upload(fileUpload, file);
    expect(fileUpload.files).toHaveLength(0);
  });

  it('Does accept valid file type', async () => {
    element = await fixture('<pds-file-upload accept=".js"></pds-file-upload>');
    const fileUpload = element.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;
    const file = new File([''], 'jest.config.js', {
      type: 'text/javascript',
      lastModified: 1645905842587,
    });
    await userEvent.upload(fileUpload, file);
    expect(fileUpload.files).toContain(file);
  });

  it('When close modal is called, error states are reset', async () => {
    const el = (await fixture(
      '<pds-file-upload accept=".js"></pds-file-upload>',
    )) as PdsFileUpload;
    el.invalidFormat === true;
    el.invalidSize === true;
    el.closeModal();
    expect(el.invalidFormat).toBe(false);
    expect(el.invalidSize).toBe(false);
  });

  it('Populates valid file extensions in error modal', async () => {
    const el = (await fixture(
      '<pds-file-upload accept=".js"></pds-file-upload>',
    )) as PdsFileUpload;
    el.invalidFormat = true;
    const modalContent = JSON.stringify(el.invalidFormatModalContent());
    expect(modalContent).toContain('js');
  });

  it('Populates correct file size restriction in error modal', async () => {
    const el = (await fixture(
      '<pds-file-upload size="100"></pds-file-upload>',
    )) as PdsFileUpload;
    el.invalidSize = true;
    const modalContent = JSON.stringify(el.invalidSizeModalContent());
    expect(modalContent).toContain('100');
  });

  it('Drag end sets isDragging to false', async () => {
    const el = (await fixture(
      '<pds-file-upload accept=".js"></pds-file-upload>',
    )) as PdsFileUpload;
    const event = new Event('drag') as DragEvent;
    el.isDragging = true;
    el.onDragEnd(event);
    expect(el.isDragging).toBe(false);
  });

  it('Drag end stays false if not dragging', async () => {
    const el = (await fixture(
      '<pds-file-upload accept=".js"></pds-file-upload>',
    )) as PdsFileUpload;
    const event = new Event('drag') as DragEvent;
    el.isDragging = false;
    el.onDragEnd(event);
    expect(el.isDragging).toBe(false);
  });

  it('Drag over sets isDragging to true', async () => {
    const el = (await fixture(
      '<pds-file-upload accept=".js"></pds-file-upload>',
    )) as PdsFileUpload;
    const event = new Event('drag') as DragEvent;
    el.isDragging = false;
    el.onDragOver(event);
    expect(el.isDragging).toBe(true);
  });

  it('Drag over stays true if still dragging', async () => {
    const el = (await fixture(
      '<pds-file-upload accept=".js"></pds-file-upload>',
    )) as PdsFileUpload;
    const event = new Event('drag') as DragEvent;
    el.isDragging = true;
    el.onDragOver(event);
    expect(el.isDragging).toBe(true);
  });

  it('Drop functionality works', async () => {
    element = await fixture('<pds-file-upload accept="js"></pds-file-upload>');
    const fileUpload = element.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;
    const file = new File([''], 'jest.config.js', {
      type: 'text/javascript',
      lastModified: 1645905842587,
    });
    Object.defineProperty(fileUpload, 'files', {
      value: [file],
    });
    await fireEvent.drop(fileUpload, {
      dataTransfer: {
        files: [file],
      },
    });
    expect(fileUpload.files).toContain(file);
  });

  it('Clicking the remove file button does remove the file from fileList', async () => {
    element = await fixture('<pds-file-upload accept=".js"></pds-file-upload>');
    const fileUpload = element.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;
    const file = new File([''], 'jest.config.js', {
      type: 'text/javascript',
      lastModified: 1645905842587,
    });
    await userEvent.upload(fileUpload, file);

    const removeFileButton = element.shadowRoot?.querySelector(
      '.pds-c-file-upload__trash-button',
    ) as HTMLButtonElement;
    await userEvent.click(removeFileButton);
    await expect(
      element.shadowRoot?.querySelector('.pds-c-file-upload__file-text')
        ?.textContent,
    ).toContain('No files have been attached.');
  });

  it('Clicking the remove file button does remove the file from fileList but leaves the other ones', async () => {
    const el = (await fixture(
      '<pds-file-upload accept=".js,.pdf" multiple></pds-file-upload>',
    )) as PdsFileUpload;
    const fileUpload = el.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;
    const file1 = new File([''], 'jest.config.js', {
      type: 'text/javascript',
      lastModified: 1645905842587,
    });
    const file2 = new File([''], 'sample.pdf', {
      type: 'application/pdf',
      lastModified: 1676655167087,
    });
    const multipleFiles = [file1, file2];
    await userEvent.upload(fileUpload, multipleFiles);

    const removeFileButton = el.shadowRoot?.querySelector(
      '.pds-c-file-upload__trash-button',
    ) as HTMLButtonElement;
    await userEvent.click(removeFileButton);
    await expect(el.uploadedFilesArray).toHaveLength(1);
  });

  it('Does accept valid file size (and type)', async () => {
    element = await fixture(
      '<pds-file-upload size="100" accept=".js"></pds-file-upload>',
    );
    const fileUpload = element.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;
    const file = new File([''], 'jest.config.js', {
      type: 'text/javascript',
      lastModified: 1645905842587,
    });
    Object.defineProperty(file, 'size', { value: 13264 });
    await userEvent.upload(fileUpload, file);
    expect(fileUpload.files).toContain(file);
  });

  it('Does not accept invalid file size', async () => {
    const el = (await fixture(
      '<pds-file-upload accept=".js" size="10"></pds-file-upload>',
    )) as PdsFileUpload;
    const fileUpload = el.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;
    const file = new File([''], 'jest.config.js', {
      type: 'text/javascript',
      lastModified: 1645905842587,
    });
    Object.defineProperty(file, 'size', { value: 351079 });
    Object.defineProperty(fileUpload, 'file', {
      value: [file],
    });
    await userEvent.upload(fileUpload, file);
    expect(el.uploadedFilesArray).toStrictEqual([]);
  });

  it('Does not accept invalid file size and invalid type', async () => {
    const el = (await fixture(
      '<pds-file-upload size="10" accept=".pdf"></pds-file-upload>',
    )) as PdsFileUpload;
    const fileUpload = el.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;
    const file = new File([''], 'jest.config.js', {
      type: 'text/javascript',
      lastModified: 1645905842587,
    });
    Object.defineProperty(file, 'size', { value: 351079 });
    Object.defineProperty(fileUpload, 'file', {
      value: [file],
    });
    await userEvent.upload(fileUpload, file);
    expect(el.uploadedFilesArray).toStrictEqual([]);
    // expect(el.invalidSize).toBe(true);
    await expect(
      element.shadowRoot?.querySelector('.pds-c-file-upload__file-text')
        ?.textContent,
    ).toContain('No files have been attached.');
  });

  it('Does not accept valid file size and invalid type', async () => {
    const el = (await fixture(
      '<pds-file-upload size="100" accept=".pdf"></pds-file-upload>',
    )) as PdsFileUpload;
    const fileUpload = el.shadowRoot?.querySelector(
      'input',
    ) as HTMLInputElement;
    const file = new File([''], 'jest.config.js', {
      type: 'text/javascript',
      lastModified: 1645905842587,
    });
    Object.defineProperty(file, 'size', { value: 351079 });
    Object.defineProperty(fileUpload, 'file', {
      value: [file],
    });
    await userEvent.upload(fileUpload, file);
    expect(el.uploadedFilesArray).toStrictEqual([]);
    // expect(el.invalidSize).toBe(true);
    await expect(
      element.shadowRoot?.querySelector('.pds-c-file-upload__file-text')
        ?.textContent,
    ).toContain('No files have been attached.');
  });

  it('should add required indicator if the required prop is set to true', async () => {
    // verify required indicator is not present when required prop is not set to true
    const requiredIndicator = element.shadowRoot?.querySelector(
      '.pds-c-file-upload__required-indicator',
    ) as HTMLSpanElement;

    expect(requiredIndicator).toBeFalsy();

    element = (await fixture(
      `<pds-file-upload name="singleFileUpload" required="true"></pds-file-upload>`,
    )) as PdsFileUpload;

    // verify required indicator is added when required prop is set to true
    const requiredIndicator1 = element.shadowRoot?.querySelector(
      '.pds-c-file-upload__required-indicator',
    ) as HTMLSpanElement;

    expect(requiredIndicator1).toBeTruthy();

    expect(requiredIndicator1?.textContent).toContain('*');
  });
});
