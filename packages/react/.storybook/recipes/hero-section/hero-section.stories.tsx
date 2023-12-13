import * as React from 'react';
import { action } from '@storybook/addon-actions';
import {
  PdsCard,
  PdsFeatureBlock,
  PdsLink,
  PdsList,
  PdsListItem,
} from '@keisha/design-system-react';
import { PdsHeading } from '../../../src/lib/components/heading/heading';
import { PdsTextPassage } from '../../../src/lib/components/text-passage/text-passage';
import { PdsButton } from '../../../src/lib/components/button/button';
import { PdsBand } from '../../../src/lib/components/band/band';
import { PdsLayoutContainer } from '../../../src/lib/components/layout-container/layout-container';
import './hero-section.scss';

export default {
  title: 'Recipes/Hero section',
  component: 'hero-section',
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
  },
  tags: ['autodocs'],
  argTypes: null,
};

export const HeroWithSolidBg = () => (
  <PdsBand variant="subtle" spacing="default">
    <PdsLayoutContainer variant="default">
      <PdsHeading
        className="pds-u-margin-top-8 pds-u-margin-left-40 pds-u-margin-right-40"
        headingTag="h1"
        variant="display-default"
      >
        This is a display.
      </PdsHeading>
      <div className="pds-u-margin-left-40 pds-u-margin-right-40 pds-u-margin-top-24">
        <PdsTextPassage lineLength="none">
          This is body text. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </PdsTextPassage>
      </div>
      <div className="pds-u-margin-top-40 pds-u-margin-left-40 pds-u-margin-right-40 pds-u-margin-bottom-8">
        <PdsButton
          variant="primary"
          onClick={(e: any) => action('pds-button-click')(e.detail)}
        >
          <span>Label</span>
        </PdsButton>
      </div>
    </PdsLayoutContainer>
  </PdsBand>
);
HeroWithSolidBg.storyName = 'Solid background';

export const HeroCentered = () => (
  <PdsBand
    variant="brand-xstrong"
    spacing="default"
    className="pds-u-typography-color-inverted-default pds-u-text-align-center"
  >
    <PdsLayoutContainer variant="default">
      <PdsHeading
        className="pds-u-margin-top-8 pds-u-margin-left-40 pds-u-margin-right-40"
        headingTag="h1"
        variant="display-default"
      >
        This is a display.
      </PdsHeading>
      <div className="pds-u-margin-left-40 pds-u-margin-right-40 pds-u-margin-top-24">
        <PdsTextPassage lineLength="none">
          This is body text. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </PdsTextPassage>
      </div>
      <div className="pds-u-margin-top-40 pds-u-margin-left-40 pds-u-margin-right-40 pds-u-margin-bottom-8">
        <PdsButton
          variant="primary-inverted"
          onClick={(e: any) => action('pds-button-click')(e.detail)}
        >
          <span>Label</span>
        </PdsButton>
      </div>
    </PdsLayoutContainer>
  </PdsBand>
);
HeroCentered.storyName = 'Centered';

export const HeroWithImage = () => (
  <PdsFeatureBlock fullWidth>
    <img
      slot="media"
      className="pds-u-block pds-u-responsive-image"
      // @ts-expect-error env comes from vite
      src={`${import.meta.env.BASE_URL}image.svg`}
      alt="placeholder"
      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
    />
    <div className="pds-u-position-relative">
      <PdsFeatureBlock fullWidth>
        <PdsBand
          variant="brand-xstrong"
          spacing="default"
          className="c-hero__band pds-u-typography-color-inverted-default"
          style={{ opacity: '0.9' }}
        >
          <PdsLayoutContainer>
            <PdsHeading
              className="pds-u-margin-top-8 pds-u-margin-left-40 pds-u-margin-right-40"
              headingTag="h1"
              variant="display-default"
            >
              This is a display.
            </PdsHeading>
            <div className="pds-u-margin-left-40 pds-u-margin-right-40 pds-u-margin-top-24">
              <PdsTextPassage lineLength="none">
                This is body text. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </PdsTextPassage>
            </div>
            <div className="pds-u-margin-top-40 pds-u-margin-left-40 pds-u-margin-right-40 pds-u-margin-bottom-8">
              <PdsButton
                variant="primary-inverted"
                onClick={(e: any) => action('pds-button-click')(e.detail)}
              >
                <span>Label</span>
              </PdsButton>
            </div>
          </PdsLayoutContainer>
        </PdsBand>
      </PdsFeatureBlock>
    </div>
  </PdsFeatureBlock>
);
HeroWithImage.storyName = 'Image';

export const HeroAudience = () => (
  <>
    <PdsFeatureBlock fullWidth>
      <img
        slot="media"
        className="pds-u-block"
        // @ts-expect-error env comes from vite
        src={`${import.meta.env.BASE_URL}image.svg`}
        alt="placeholder"
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
      <div className="pds-u-position-relative">
        <PdsFeatureBlock fullWidth>
          <PdsBand
            variant="brand-xstrong"
            spacing="default"
            className="c-hero-audience__band pds-u-typography-color-inverted-default"
          >
            <PdsLayoutContainer>
              <div className="pds-u-margin-left-40 pds-u-margin-right-40">
                <PdsHeading
                  className="pds-u-margin-top-8"
                  headingTag="h1"
                  variant="display-default"
                >
                  This is a display.
                </PdsHeading>
                <div className="pds-u-margin-top-24">
                  <PdsTextPassage lineLength="none">
                    This is body text. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </PdsTextPassage>
                </div>
                <div className="pds-u-margin-top-40 pds-u-margin-bottom-8">
                  <PdsButton
                    variant="primary-inverted"
                    onClick={(e: any) => action('pds-button-click')(e.detail)}
                  >
                    <span>Label</span>
                  </PdsButton>
                </div>
              </div>
            </PdsLayoutContainer>
          </PdsBand>
        </PdsFeatureBlock>
      </div>
    </PdsFeatureBlock>
    <PdsCard
      variant="bare"
      removePadding
      target="_blank"
      className="pds-card-quickLinks pds-u-background-brand-xstrong"
    >
      <PdsHeading
        headingTag="h2"
        variant="title-sm"
        className="pds-u-typography-color-inverted-default"
      >
        Quick links
      </PdsHeading>
      <PdsList className="pds-u-margin-top-20" spacing="sm">
        <PdsListItem>
          <PdsLink
            href="https://google.com"
            variant="emphasis-inverted"
            onClick={(e: any) => action('pds-link-click')(e.detail)}
          >
            Link 1
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink
            href="https://google.com"
            variant="emphasis-inverted"
            onClick={(e: any) => action('pds-link-click')(e.detail)}
          >
            Link 3
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink
            href="https://google.com"
            variant="emphasis-inverted"
            onClick={(e: any) => action('pds-link-click')(e.detail)}
          >
            Link 3
          </PdsLink>
        </PdsListItem>
        <PdsListItem>
          <PdsLink
            href="https://google.com"
            variant="emphasis-inverted"
            onClick={(e: any) => action('pds-link-click')(e.detail)}
          >
            Link 4
          </PdsLink>
        </PdsListItem>
      </PdsList>
    </PdsCard>
  </>
);
HeroAudience.storyName = 'Audience';
