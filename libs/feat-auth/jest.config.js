module.exports = {
  name: 'feat-auth',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/feat-auth',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
