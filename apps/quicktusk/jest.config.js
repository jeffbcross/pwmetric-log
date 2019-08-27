module.exports = {
  name: 'quicktusk',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/quicktusk',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
