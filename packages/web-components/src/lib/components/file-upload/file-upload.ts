import { html, nothing } from 'lit';
import { localized, msg } from '@lit/localize';
import { property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { pdsCustomElement as customElement } from '../../decorators/pds-custom-element';
import styles from './file-upload.scss?inline';
import '@keisha/design-system-icons-web/paperclip';
import '@keisha/design-system-icons-web/trash';
import '@keisha/design-system-icons-web/upload';
import '@keisha/design-system-icons-web/alert-circle';
import '../modal/modal';
import { PdsFormElement } from '../pds-form-element/PdsFormElement';
import { FilesStateConfig } from './file-upload.model';

/**
 * @summary The file upload component enables users to attach and upload files from their device.
 *
 * @slot help-text Use this slot instead of the helpText property, if the help text requires additonal markup.
 *
 * @fires pds-file-upload-change A custom event dispatched on change of the file input
 * @fires pds-file-upload-remove A custom event dispatched on the removal of an uploaded file
 *
 * @slot help-text Use this slot instead of the helpText property, if the help text requires additional markup.
 */

@customElement('pds-file-upload', {
  category: 'component',
  type: 'component',
  styles,
})
@localized()
export class PdsFileUpload extends PdsFormElement {
  connectedCallback() {
    super.connectedCallback();
    this.setLocale();

    this.shadowRoot?.addEventListener('pds-modal-close', () => {
      this.closeModal();
    });
  }

  /** @internal */
  @query('input')
  field: HTMLInputElement;

  /**
   * List of files it will accept, separated by commas
   */
  @property({ type: String })
  accept?: String;

  /**
   * Lists the name of replaced file in single fileupload
   * @internal
   */
  @state()
  newFile?: String;

  /**
   * Lists the name of current file in single fileupload
   * @internal
   */
  @state()
  currentFile?: String;

  /**
   * Does the file upload accept multiple files?
   * Defaults to false
   */
  @property({ type: Boolean })
  multiple: Boolean = false;

  /**
   * @optional
   * Size
   * Maximum file size that can be accepted in KB
   */
  @property({ type: Number })
  size: number;

  /**
   * Modal state
   * @internal
   */
  @property({ type: Boolean })
  modalState: boolean;

  /**
   * Modal state for single file upload
   * @internal
   */
  @state()
  replaceModal: boolean;

  /**
   * Boolean value to display invalid file size error state.
   * @internal
   */
  @state()
  invalidSize = false;

  /**
   * Boolean value to display invalid file format error state.
   * @internal
   */
  @state()
  invalidFormat = false;

  @state()
  filesArray: FileList;

  /**
   * Files that are uploaded successfully
   * @internal
   */
  @state()
  uploadedFilesArray: FilesStateConfig[] = [];

  /**
   * This is a check to see if the fileUpload has an attached file or not.
   * @internal
   */
  @state()
  hasAttachment = false;

  /**
   * Dragging state
   * @internal
   */
  @state()
  isDragging: boolean;

  private acceptedFilesArray: string[];

  private invalidFilename: String = '';

  getFileSizeBytes() {
    return this.size * 1024;
  }

  singleOrMultipleLabel() {
    return this.multiple ? msg('Attach files') : msg('Attach file');
  }

  override labelTemplate() {
    if (!this.multiple) {
      return html` <label
        for="${this.getFieldId()}"
        class="${this.classEl('upload-label')}"
      >
        <pds-icon-upload size="xxl"></pds-icon-upload>
        <div class="${this.classEl('label-text-desktop')}">
          ${msg(
            html`Drop a file to attach, or
              <button class="${this.classEl('upload-link')}">browse.</button>`,
          )}
        </div>
        <div class="${this.classEl('label-text-mobile')}">
          <span class="${this.classEl('upload-link')}"
            >${msg('Browse files')}</span
          >.
        </div>
      </label>`;
    }
    return html`
      <label for="${this.getFieldId()}" class="${this.classEl('upload-label')}">
        <pds-icon-upload size="xxl"></pds-icon-upload>
        <div class="${this.classEl('label-text-desktop')}">
          ${msg(
            html`Drop files to attach, or
              <button class="${this.classEl('upload-link')}">browse.</button>`,
          )}
        </div>
        <div class="${this.classEl('label-text-mobile')}">
          <span class="${this.classEl('upload-link')}"
            >${msg('Browse files')}</span
          >.
        </div>
      </label>
    `;
  }

  /**
   * @internal
   */
  get classNames() {
    return {
      'is-dragging': this.isDragging === true,
    };
  }

  onDragOver(e: DragEvent) {
    e.preventDefault();
    if (!this.isDragging) {
      this.isDragging = true;
    }
  }

  onDragEnd(e: DragEvent) {
    e.preventDefault();
    if (this.isDragging) {
      this.isDragging = false;
    }
  }

  firstUpdated() {
    this.acceptedFiles();
  }

  closeModal() {
    this.modalState = false;
    this.replaceModal = false;
    // reset the error states
    this.invalidFormat = false;
    this.invalidSize = false;
  }

  replaceEvent() {
    let formData = new FormData();
    this.uploadedFilesArray = [];
    formData = new FormData();
    this.uploadedFilesArray.push(this.filesArray[0]);
    formData.append(this.name, this.filesArray[0], this.filesArray[0].name);
    this.replaceModal = false;
    this.currentFile = this.newFile;
  }

  acceptedFiles() {
    this.acceptedFilesArray = this.accept?.split(',') || [];
    const cleanFileExt: string[] = [];
    this.acceptedFilesArray.forEach((file) => {
      const ext = file.slice(1);
      cleanFileExt.push(ext);
    });
    this.acceptedFilesArray = cleanFileExt;
  }

  // Setting this to InputEvent | DragEvent required us to add a
  // lot of unnecessary logic just to make typescript happy.
  // Decided that this is ok to leave as "any".
  handleChange(e: any) {
    this.filesArray = e.dataTransfer?.files || e.target?.files;

    e.preventDefault();
    this.hasAttachment = true;
    this.modalState = false;
    let formData = new FormData();

    Array.from(this.filesArray)?.map((file: FilesStateConfig) => {
      // Perform validations on submitted files
      // if file does not have a valid extension, show error modal and do not attach file
      const fileExtension = file.name.split('.').pop() || '';
      if (this.accept && !this.acceptedFilesArray.includes(fileExtension)) {
        this.modalState = true;
        this.invalidFormat = true;
        // track which file caused the issue
        this.invalidFilename = file.name;
        // display "no files attached" message if nothing could be uploaded
        if (this.uploadedFilesArray.length === 0) {
          this.hasAttachment = false;
        }
      }
      // else if file is not a valid size, show error modal and do not attach file
      else if (this.size && this.getFileSizeBytes() <= file.size) {
        this.modalState = true;
        this.invalidSize = true;
        // track which file caused the issue
        this.invalidFilename = file.name;
        // display "no files attached" message if nothing could be uploaded
        if (this.uploadedFilesArray.length === 0) {
          this.hasAttachment = false;
        }
      }
      // if passes both of the checks, file is good to go & upload it!
      else {
        // eslint-disable-next-line no-param-reassign
        file.status = 'uploading';
        // eslint-disable-next-line no-param-reassign
        file.statusText = 'success';

        // if single file upload, reset file lists instead of adding additional
        if (!this.multiple) {
          if (this.uploadedFilesArray?.length === 1) {
            this.replaceModal = true;
            this.newFile = this.filesArray[0].name;
            return nothing;
          }
          this.uploadedFilesArray = [];
          formData = new FormData();
        }
        this.uploadedFilesArray.push(file);
        formData.append(this.name, file, file.name);
        this.currentFile = this.filesArray[0].name;
      }

      const customEvent = new CustomEvent('pds-file-upload-change', {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail: {
          summary: this.uploadedFilesArray,
        },
      });

      this.dispatchEvent(customEvent);

      return this.internals.setFormValue(formData);
    });
  }

  removeFile(e: Event, fileToRemove: File) {
    e.preventDefault();
    const formData = new FormData();
    this.uploadedFilesArray = this.uploadedFilesArray.filter(
      (item) => item !== fileToRemove,
    );

    this.uploadedFilesArray.forEach((item) => {
      const file = item;
      formData.append(this.name, file, file.name);
    });

    this.internals.setFormValue(formData);

    if (this.uploadedFilesArray.length === 0) {
      this.hasAttachment = false;
    }

    const customEvent = new CustomEvent('pds-file-upload-remove', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        summary: {
          'Removed file': fileToRemove,
          'Updated files array': this.uploadedFilesArray,
        },
      },
    });

    this.dispatchEvent(customEvent);
  }

  /**
   * Set uploadedFilesArray back to empty and clear the form value
   */
  formResetCallback() {
    this.uploadedFilesArray = [];
    this.internals.setFormValue(new FormData());
    this.hasAttachment = false;
  }

  /**
   * Appears when user tries to change the file in single file upload.
   */
  notifyUser() {
    return html`<pds-modal
      modalTitle="${msg('Are you sure you want to replace this file:')}"
      openOnLoad
    >
      <div>
        <pds-text-passage>
          <div class="${this.classEl('modal-text')}">${msg('Replace')}:</div>
          <ul>
            <li>
              <div class="${this.classEl('current-file')}">
                ${this.currentFile}
              </div>
            </li>
          </ul>
          <div class="${this.classEl('modal-text')}">${msg('With')}:</div>
          <ul>
            <li>
              <div class="${this.classEl('new-file')}">${this.newFile}</div>
            </li>
          </ul>
        </pds-text-passage>
      </div>
      <pds-button
        link="default"
        class="${this.classEl('close-modal')}"
        @click=${this.closeModal}
        slot="footer"
        >${msg('Cancel')}</pds-button
      >
      <pds-button
        variant="primary"
        @click=${this.replaceEvent}
        class="${this.classEl('replace')}"
        slot="footer"
        >${msg('Replace')}</pds-button
      >
    </pds-modal>`;
  }

  noFilesAttached() {
    return html`<span class="${this.classEl('file-text')}"
      >${msg('No files have been attached.')}</span
    >`;
  }

  invalidFormatModalContent() {
    return html`<p>
        ${msg(
          'Please make sure your files are in one of the following formats',
        )}:
      </p>
      <ul>
        ${Array.from(this.acceptedFilesArray)?.map(
          (item: String) => html`<li>${item}</li>`,
        )}
      </ul>`;
  }

  invalidSizeModalContent() {
    return html`<p>
      ${msg('Please make sure your files are below')} ${this.size} KB.
    </p>`;
  }

  preSubmitErrorModal() {
    let errorContent;
    if (this.invalidFormat) {
      errorContent = this.invalidFormatModalContent();
    }
    if (this.invalidSize) {
      errorContent = this.invalidSizeModalContent();
    }
    return html`<pds-modal
      modalTitle="${msg('The following file could not be uploaded')}:"
      openOnLoad
    >
      <div>
        <span class="${this.classEl('invalid-file')}"
          ><pds-icon-alert-circle></pds-icon-alert-circle>
          ${this.invalidFilename}
        </span>
        <pds-text-passage>${errorContent}</pds-text-passage>
      </div>
      <pds-button variant="primary" @click=${this.closeModal} slot="footer"
        >${msg('Try again')}</pds-button
      >
    </pds-modal>`;
  }

  render() {
    return html`<div class=${this.getClass()}>
      <p class="${this.classEl('attach-files-label')}">
        ${this.singleOrMultipleLabel()}
        ${this.required
          ? html`<span
              class="${this.classEl('required-indicator')}"
              aria-hidden="true"
            >
              *
            </span>`
          : nothing}
      </p>
      ${this.helpTextTemplate()}
      <div
        class="${this.classEl('upload-container')}"
        @dragover=${this.onDragOver}
        @dragend=${this.onDragEnd}
        @dragleave=${this.onDragEnd}
        @drop=${this.onDragEnd}
      >
        ${this.labelTemplate()}
        <input
          type="file"
          name="${this.name}"
          id="${this.fieldId || `${this.name}-field`}"
          class="${this.classEl('input')}"
          aria-describedby="${this.getAriaDescribedBy()}"
          accept="${ifDefined(this.accept)}"
          ?multiple="${this.multiple}"
          aria-required=${this.required ? 'true' : nothing}
          ?required=${this.required}
          @change=${(e: any) => this.handleChange(e)}
          @drop=${(e: DragEvent) => this.handleChange(e)}
        />
      </div>
      <div class="${this.classEl('file-section')}">
        ${Array.from(this.uploadedFilesArray)?.map(
          (file: FilesStateConfig) =>
            html`<div class="${this.classEl('file-uploaded')}">
              <span class="${this.classEl('filename')}">
                <pds-icon-paperclip></pds-icon-paperclip>
                <span>${file.name}</span></span
              >
              <pds-button
                variant="icon"
                size="sm"
                ariaLabel="${msg('Remove attachment')}"
                class="${this.classEl('trash-button')}"
                @click=${(e: MouseEvent) => this.removeFile(e, file)}
                ><pds-icon-trash></pds-icon-trash
              ></pds-button>
            </div>
            </div>
        `,
        )}${this.modalState === true ? this.preSubmitErrorModal() : nothing}
        ${this.hasAttachment === false ? this.noFilesAttached() : nothing}
        ${this.replaceModal === true ? this.notifyUser() : nothing}
      </div>
    </div>`;
  }
}
