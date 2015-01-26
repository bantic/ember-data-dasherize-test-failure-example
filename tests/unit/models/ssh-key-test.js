import {
  moduleForModel,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForModel('ssh-key', 'SshKey', {
  // Specify the other units that are required for this test.
  needs: ['adapter:application']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});

test('it can be looked up', function() {
  var store = this.store();

  var sshKey;

  Ember.run(function(){
    sshKey = store.createRecord('ssh-key');
  });

  return Ember.run(function(){
    return sshKey.save();
  });
});
