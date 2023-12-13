import { Stories2SnapsConverter } from '@storybook/addon-storyshots';
import { fixture } from '@open-wc/testing';

interface CreateSnapshotsType {
  story: any;
  context: any;
  done?: any;
}

const createSnapshots = async ({
  story,
  context,
  done,
}: CreateSnapshotsType) => {
  const converter = new Stories2SnapsConverter();
  const snapshotFilename = converter.getSnapshotFileName(context);
  const snapshotPath = snapshotFilename?.substring(
    snapshotFilename.indexOf('__snapshots__'),
  );
  const storyElement = await story.render();
  const storyElementString = storyElement.strings.join();
  const storyElementArgs = storyElement.values;
  const storyStringWithValues = storyElementArgs.reduce(
    (string: string, arg: string) => {
      if (typeof arg === 'symbol' || typeof arg === undefined) {
        return string.replace(/","/, `"undefined"`);
      }

      if (typeof arg === 'string' || typeof arg === 'number') {
        if (arg === '') {
          return string.replace(/","/, `""`);
        }
        return string.replace(/","/, `"${arg}"`);
      }

      if (typeof arg === 'boolean') {
        return arg
          ? string.replace(/","/, `"true"`)
          : string.replace(/","/, `"false"`);
      }

      return string.replace(/","/, `"${arg}"`);
    },
    storyElementString,
  );
  const element = await fixture(storyStringWithValues);

  setTimeout(() => {
    if (snapshotFilename && element.shadowRoot) {
      expect(
        element.outerHTML
          .replace('><', `>${element.shadowRoot.innerHTML}<`)
          .replaceAll(/<!--\?lit\$\d*\$-->/g, '')
          // This regex removes all undefined props from the rendered string, (e.g. ' size="undefined"')
          .replaceAll(/\s[^\s]+="undefined"/g, ''),
      ).toMatchSpecificSnapshot(`./${snapshotPath}`);
      // Elements without the shadow DOM
    } else if (snapshotFilename && element) {
      expect(
        element.outerHTML.replaceAll(/<!--\?lit\$\d*\$-->/g, ''),
      ).toMatchSpecificSnapshot(`./${snapshotPath}`);
    }

    done();
  }, 1);
};

export default createSnapshots;
