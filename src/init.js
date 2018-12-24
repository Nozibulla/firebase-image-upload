import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';
import { config } from './firebase.config';

firebase.initializeApp(config);

const db = firebase.firestore();
const storage = firebase.storage();

db.settings({
  timestampsInSnapshots: true,
});

const getThumbUrl = imageUrl => {
  const imageName = imageUrl.substr(imageUrl.lastIndexOf('/') + 1);
  const thumbImageName = `thumb_${imageName}`;
  const extractedUrl = imageUrl.substr(0, imageUrl.lastIndexOf('/') + 1);
  const finalUrl = `${extractedUrl}${thumbImageName}`;
  return finalUrl;
};

export { db, storage, getThumbUrl };
