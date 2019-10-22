module.exports = {
  name: 'data-access-auth',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/data-access-auth',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
