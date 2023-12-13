import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './iconGallery';
import '../alert-circle/alert-circle';
import '../alert-triangle/alert-triangle';
import '../area-chart/area-chart';
import '../arrow-down/arrow-down';
import '../arrow-left/arrow-left';
import '../arrow-right/arrow-right';
import '../arrow-up/arrow-up';
import '../bell/bell';
import '../bell-notification/bell-notification';
import '../calculator/calculator';
import '../calendar/calendar';
import '../check/check';
import '../check-circle/check-circle';
import '../chevron-down/chevron-down';
import '../chevron-left/chevron-left';
import '../chevron-right/chevron-right';
import '../chevron-up/chevron-up';
import '../chevrons-left/chevrons-left';
import '../chevrons-right/chevrons-right';
import '../clock/clock';
import '../copy/copy';
import '../corner-up-left/corner-up-left';
import '../dollar-sign/dollar-sign';
import '../download/download';
import '../edit/edit';
import '../external-link/external-link';
import '../eye/eye';
import '../eye-off/eye-off';
import '../facebook/facebook';
import '../file/file';
import '../filter/filter';
import '../flag/flag';
import '../globe/globe';
import '../heart/heart';
import '../help-circle/help-circle';
import '../home/home';
import '../image/image';
import '../info/info';
import '../instagram/instagram';
import '../life-buoy/life-buoy';
import '../lightbulb/lightbulb';
import '../line-chart/line-chart';
import '../linkedin/linkedin';
import '../list/list';
import '../loader/loader';
import '../lock/lock';
import '../log-out/log-out';
import '../mail/mail';
import '../map-pin/map-pin';
import '../menu/menu';
import '../message-square/message-square';
import '../minus/minus';
import '../more-horizontal/more-horizontal';
import '../paperclip/paperclip';
import '../pause-circle/pause-circle';
import '../pen-square/pen-square';
import '../phone/phone';
import '../pin/pin';
import '../play-circle/play-circle';
import '../plus/plus';
import '../printer/printer';
import '../refresh-ccw/refresh-ccw';
import '../refresh-cw/refresh-cw';
import '../search/search';
import '../settings/settings';
import '../share/share';
import '../shield/shield';
import '../shield-check/shield-check';
import '../sprout/sprout';
import '../star/star';
import '../star-full/star-full';
import '../star-half/star-half';
import '../sun/sun';
import '../thumbs-down/thumbs-down';
import '../thumbs-up/thumbs-up';
import '../trash/trash';
import '../twitter/twitter';
import '../umbrella/umbrella';
import '../unlock/unlock';
import '../upload/upload';
import '../user/user';
import '../users/users';
import '../whatsapp/whatsapp';
import '../wrench/wrench';
import '../x/x';
import '../youtube/youtube';
import '../zoom-in/zoom-in';
import '../zoom-out/zoom-out';

export default {
  title: 'Gallery/Web icons',
  component: 'pds-icon-gallery',
  tags: ['autodocs'],
  render: () =>
    html`<pds-icon-gallery>
      <table class="pds-u-typography-body-default">
        <tbody>
          <tr>
            <td>
              <pds-icon-alert-circle size="default"></pds-icon-alert-circle>
            </td>
            <td>alert-circle</td>
          </tr>
          <tr>
            <td>
              <pds-icon-alert-triangle size="default"></pds-icon-alert-triangle>
            </td>
            <td>alert-triangle</td>
          </tr>
          <tr>
            <td><pds-icon-area-chart size="default"></pds-icon-area-chart></td>
            <td>area-chart</td>
          </tr>
          <tr>
            <td><pds-icon-arrow-down size="default"></pds-icon-arrow-down></td>
            <td>arrow-down</td>
          </tr>
          <tr>
            <td><pds-icon-arrow-left size="default"></pds-icon-arrow-left></td>
            <td>arrow-left</td>
          </tr>
          <tr>
            <td>
              <pds-icon-arrow-right size="default"></pds-icon-arrow-right>
            </td>
            <td>arrow-right</td>
          </tr>
          <tr>
            <td><pds-icon-arrow-up size="default"></pds-icon-arrow-up></td>
            <td>arrow-up</td>
          </tr>
          <tr>
            <td><pds-icon-bell size="default"></pds-icon-bell></td>
            <td>bell</td>
          </tr>
          <tr>
            <td>
              <pds-icon-bell-notification
                size="default"
              ></pds-icon-bell-notification>
            </td>
            <td>bell-notification</td>
          </tr>
          <tr>
            <td><pds-icon-calculator size="default"></pds-icon-calculator></td>
            <td>calculator</td>
          </tr>
          <tr>
            <td><pds-icon-calendar size="default"></pds-icon-calendar></td>
            <td>calendar</td>
          </tr>
          <tr>
            <td><pds-icon-check size="default"></pds-icon-check></td>
            <td>check</td>
          </tr>
          <tr>
            <td>
              <pds-icon-check-circle size="default"></pds-icon-check-circle>
            </td>
            <td>check-circle</td>
          </tr>
          <tr>
            <td>
              <pds-icon-chevron-down size="default"></pds-icon-chevron-down>
            </td>
            <td>chevron-down</td>
          </tr>
          <tr>
            <td>
              <pds-icon-chevron-left size="default"></pds-icon-chevron-left>
            </td>
            <td>chevron-left</td>
          </tr>
          <tr>
            <td>
              <pds-icon-chevron-right size="default"></pds-icon-chevron-right>
            </td>
            <td>chevron-right</td>
          </tr>
          <tr>
            <td><pds-icon-chevron-up size="default"></pds-icon-chevron-up></td>
            <td>chevron-up</td>
          </tr>
          <tr>
            <td>
              <pds-icon-chevrons-left size="default"></pds-icon-chevrons-left>
            </td>
            <td>chevrons-left</td>
          </tr>
          <tr>
            <td>
              <pds-icon-chevrons-right size="default"></pds-icon-chevrons-right>
            </td>
            <td>chevrons-right</td>
          </tr>
          <tr>
            <td><pds-icon-clock size="default"></pds-icon-clock></td>
            <td>clock</td>
          </tr>
          <tr>
            <td><pds-icon-copy size="default"></pds-icon-copy></td>
            <td>copy</td>
          </tr>
          <tr>
            <td>
              <pds-icon-corner-up-left size="default"></pds-icon-corner-up-left>
            </td>
            <td>corner-up-left</td>
          </tr>
          <tr>
            <td>
              <pds-icon-dollar-sign size="default"></pds-icon-dollar-sign>
            </td>
            <td>dollar-sign</td>
          </tr>
          <tr>
            <td><pds-icon-download size="default"></pds-icon-download></td>
            <td>download</td>
          </tr>
          <tr>
            <td><pds-icon-edit size="default"></pds-icon-edit></td>
            <td>edit</td>
          </tr>
          <tr>
            <td>
              <pds-icon-external-link size="default"></pds-icon-external-link>
            </td>
            <td>external-link</td>
          </tr>
          <tr>
            <td><pds-icon-eye size="default"></pds-icon-eye></td>
            <td>eye</td>
          </tr>
          <tr>
            <td><pds-icon-eye-off size="default"></pds-icon-eye-off></td>
            <td>eye-off</td>
          </tr>
          <tr>
            <td><pds-icon-facebook size="default"></pds-icon-facebook></td>
            <td>facebook</td>
          </tr>
          <tr>
            <td><pds-icon-file size="default"></pds-icon-file></td>
            <td>file</td>
          </tr>
          <tr>
            <td><pds-icon-filter size="default"></pds-icon-filter></td>
            <td>filter</td>
          </tr>
          <tr>
            <td><pds-icon-flag size="default"></pds-icon-flag></td>
            <td>flag</td>
          </tr>
          <tr>
            <td><pds-icon-globe size="default"></pds-icon-globe></td>
            <td>globe</td>
          </tr>
          <tr>
            <td><pds-icon-heart size="default"></pds-icon-heart></td>
            <td>heart</td>
          </tr>
          <tr>
            <td>
              <pds-icon-help-circle size="default"></pds-icon-help-circle>
            </td>
            <td>help-circle</td>
          </tr>
          <tr>
            <td><pds-icon-home size="default"></pds-icon-home></td>
            <td>home</td>
          </tr>
          <tr>
            <td><pds-icon-image size="default"></pds-icon-image></td>
            <td>image</td>
          </tr>
          <tr>
            <td><pds-icon-info size="default"></pds-icon-info></td>
            <td>info</td>
          </tr>
          <tr>
            <td><pds-icon-instagram size="default"></pds-icon-instagram></td>
            <td>instagram</td>
          </tr>
          <tr>
            <td><pds-icon-life-buoy size="default"></pds-icon-life-buoy></td>
            <td>life-buoy</td>
          </tr>
          <tr>
            <td><pds-icon-lightbulb size="default"></pds-icon-lightbulb></td>
            <td>lightbulb</td>
          </tr>
          <tr>
            <td><pds-icon-line-chart size="default"></pds-icon-line-chart></td>
            <td>line-chart</td>
          </tr>
          <tr>
            <td><pds-icon-linkedin size="default"></pds-icon-linkedin></td>
            <td>linkedin</td>
          </tr>
          <tr>
            <td><pds-icon-list size="default"></pds-icon-list></td>
            <td>list</td>
          </tr>
          <tr>
            <td><pds-icon-loader size="default"></pds-icon-loader></td>
            <td>loader</td>
          </tr>
          <tr>
            <td><pds-icon-lock size="default"></pds-icon-lock></td>
            <td>lock</td>
          </tr>
          <tr>
            <td><pds-icon-log-out size="default"></pds-icon-log-out></td>
            <td>log-out</td>
          </tr>
          <tr>
            <td><pds-icon-mail size="default"></pds-icon-mail></td>
            <td>mail</td>
          </tr>
          <tr>
            <td><pds-icon-map-pin size="default"></pds-icon-map-pin></td>
            <td>map-pin</td>
          </tr>
          <tr>
            <td><pds-icon-menu size="default"></pds-icon-menu></td>
            <td>menu</td>
          </tr>
          <tr>
            <td>
              <pds-icon-message-square size="default"></pds-icon-message-square>
            </td>
            <td>message-square</td>
          </tr>
          <tr>
            <td><pds-icon-minus size="default"></pds-icon-minus></td>
            <td>minus</td>
          </tr>
          <tr>
            <td>
              <pds-icon-more-horizontal
                size="default"
              ></pds-icon-more-horizontal>
            </td>
            <td>more-horizontal</td>
          </tr>
          <tr>
            <td><pds-icon-paperclip size="default"></pds-icon-paperclip></td>
            <td>paperclip</td>
          </tr>
          <tr>
            <td>
              <pds-icon-pause-circle size="default"></pds-icon-pause-circle>
            </td>
            <td>pause-circle</td>
          </tr>
          <tr>
            <td><pds-icon-pen-square size="default"></pds-icon-pen-square></td>
            <td>pen-square</td>
          </tr>
          <tr>
            <td><pds-icon-phone size="default"></pds-icon-phone></td>
            <td>phone</td>
          </tr>
          <tr>
            <td><pds-icon-pin size="default"></pds-icon-pin></td>
            <td>pin</td>
          </tr>
          <tr>
            <td>
              <pds-icon-play-circle size="default"></pds-icon-play-circle>
            </td>
            <td>play-circle</td>
          </tr>
          <tr>
            <td><pds-icon-plus size="default"></pds-icon-plus></td>
            <td>plus</td>
          </tr>
          <tr>
            <td><pds-icon-printer size="default"></pds-icon-printer></td>
            <td>printer</td>
          </tr>
          <tr>
            <td>
              <pds-icon-refresh-ccw size="default"></pds-icon-refresh-ccw>
            </td>
            <td>refresh-ccw</td>
          </tr>
          <tr>
            <td><pds-icon-refresh-cw size="default"></pds-icon-refresh-cw></td>
            <td>refresh-cw</td>
          </tr>
          <tr>
            <td><pds-icon-search size="default"></pds-icon-search></td>
            <td>search</td>
          </tr>
          <tr>
            <td><pds-icon-settings size="default"></pds-icon-settings></td>
            <td>settings</td>
          </tr>
          <tr>
            <td><pds-icon-share size="default"></pds-icon-share></td>
            <td>share</td>
          </tr>
          <tr>
            <td><pds-icon-shield size="default"></pds-icon-shield></td>
            <td>shield</td>
          </tr>
          <tr>
            <td>
              <pds-icon-shield-check size="default"></pds-icon-shield-check>
            </td>
            <td>shield-check</td>
          </tr>
          <tr>
            <td><pds-icon-sprout size="default"></pds-icon-sprout></td>
            <td>sprout</td>
          </tr>
          <tr>
            <td><pds-icon-star size="default"></pds-icon-star></td>
            <td>star</td>
          </tr>
          <tr>
            <td><pds-icon-star-full size="default"></pds-icon-star-full></td>
            <td>star-full</td>
          </tr>
          <tr>
            <td><pds-icon-star-half size="default"></pds-icon-star-half></td>
            <td>star-half</td>
          </tr>
          <tr>
            <td><pds-icon-sun size="default"></pds-icon-sun></td>
            <td>sun</td>
          </tr>
          <tr>
            <td>
              <pds-icon-thumbs-down size="default"></pds-icon-thumbs-down>
            </td>
            <td>thumbs-down</td>
          </tr>
          <tr>
            <td><pds-icon-thumbs-up size="default"></pds-icon-thumbs-up></td>
            <td>thumbs-up</td>
          </tr>
          <tr>
            <td><pds-icon-trash size="default"></pds-icon-trash></td>
            <td>trash</td>
          </tr>
          <tr>
            <td><pds-icon-twitter size="default"></pds-icon-twitter></td>
            <td>twitter</td>
          </tr>
          <tr>
            <td><pds-icon-umbrella size="default"></pds-icon-umbrella></td>
            <td>umbrella</td>
          </tr>
          <tr>
            <td><pds-icon-unlock size="default"></pds-icon-unlock></td>
            <td>unlock</td>
          </tr>
          <tr>
            <td><pds-icon-upload size="default"></pds-icon-upload></td>
            <td>upload</td>
          </tr>
          <tr>
            <td><pds-icon-user size="default"></pds-icon-user></td>
            <td>user</td>
          </tr>
          <tr>
            <td><pds-icon-users size="default"></pds-icon-users></td>
            <td>users</td>
          </tr>
          <tr>
            <td><pds-icon-whatsapp size="default"></pds-icon-whatsapp></td>
            <td>whatsapp</td>
          </tr>
          <tr>
            <td><pds-icon-wrench size="default"></pds-icon-wrench></td>
            <td>wrench</td>
          </tr>
          <tr>
            <td><pds-icon-x size="default"></pds-icon-x></td>
            <td>x</td>
          </tr>
          <tr>
            <td><pds-icon-youtube size="default"></pds-icon-youtube></td>
            <td>youtube</td>
          </tr>
          <tr>
            <td><pds-icon-zoom-in size="default"></pds-icon-zoom-in></td>
            <td>zoom-in</td>
          </tr>
          <tr>
            <td><pds-icon-zoom-out size="default"></pds-icon-zoom-out></td>
            <td>zoom-out</td>
          </tr>
        </tbody>
      </table></pds-icon-gallery
    >`,
} as Meta;

export const IconGallery: StoryObj = {
  name: 'IconGallery',
};
