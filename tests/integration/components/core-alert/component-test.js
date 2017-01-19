import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('core-alert', 'Integration | Component | core alert', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{#core-alert brand="primary"}}Check-it-out{{/core-alert}}`);

  assert.ok(this.$('.core-alert').length, 'renders root element');
  assert.ok(this.$('.core-alert').hasClass('alert-primary'), 'renders brand class');
  assert.ok(this.$('.core-alert').hasClass('alert-dismissible'), 'renders dismissible class by default');
  assert.ok(this.$('.close').length, 'renders the close button');
  assert.ok(this.$('.core-alert').text().indexOf('Check-it-out') > 0, 'renders alert content');
});

test('can disable dismiss button', function(assert) {

  this.render(hbs`{{#core-alert brand="primary" canDismiss=false}}Check-it-out{{/core-alert}}`);

  assert.ok(this.$('.core-alert').length, 'renders root element');
  assert.ok(this.$('.core-alert').hasClass('alert-primary'), 'renders brand class');
  assert.notOk(this.$('.core-alert').hasClass('alert-dismissible'), 'does not render dismissible class');
  assert.notOk(this.$('.close').length, 'does not render the close button');
  assert.ok(this.$('.core-alert').text().indexOf('Check-it-out') > 0, 'renders alert content');
});

test('dismissing alert fires onDismiss action', function(assert) {
  assert.expect(1);

  this.set('handleDismiss', () => {
    assert.ok(true, 'onDismiss action is fired');
  });

  this.render(hbs`{{#core-alert brand="primary" onDismiss=(action handleDismiss)}}Check-it-out{{/core-alert}}`);

  this.$('.close').click();
});
