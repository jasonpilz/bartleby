import Ember from 'ember';
import DS from 'ember-data';

const electron = requireNode('electron');
const mainProcess = electron.remote.require('./electron');
const filesystem = mainProcess.filesystem;

let fakeData = [
  { id: 'hello.md', content: 'This is a note.' },
  { id: 'byebye.md', content: 'This is another note.' },
];

export default DS.Adapter.extend({

  findAll() {
    return filesystem.all();
  }

});
