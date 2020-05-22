import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';
import layout from '../templates/components/post-card';

export default Component.extend({
  post: undefined,
  layout,
  tagName: '',
  computedStyle: computed('post.image', 'post', function () {
    console.log(this.post)
    if (!this.post.image) {
      return;
    }

    // Make sure this is in fact safe!! this does not make things safe, it tells
    // the template that it is safe.
    return htmlSafe(`background-image: url(${this.post.image})`);
  })
});
