module.exports = {
  name: 'feat-secure-page',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/feat-secure-page',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
