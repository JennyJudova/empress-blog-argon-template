import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';
import layout from '../templates/components/post-card';

export default Component.extend({
  post: undefined,
  layout,
  tagName: '',
  computedStyle: computed('post.image', 'post', function () {
    if (!this.post.image) {
      return;
    }
    return htmlSafe(`background-image: url(${this.post.image})`);
  })
});
