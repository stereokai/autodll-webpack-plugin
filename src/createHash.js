import crypto from 'crypto';

const createHash = settings => {
  const hash = crypto.createHash('md5');
  const settingsJSON = JSON.stringify(settings);
  const projectId = settings.project ? settings.project + '_' : '';

  hash.update(settingsJSON);

  return projectId + [settings.env, settings.id, hash.digest('hex')].join('_');
};

export default createHash;
