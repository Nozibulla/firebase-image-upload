import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import classNames from 'classnames';
import { storage, getThumbUrl } from './init';

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    image: [],
  };
  onDrop = Images => {
    console.log(Images);
    this.setState({ image: Images });
  };
  sendToFirebase = () => {
    const { image } = this.state;
    if (image.length) {
      var imageRef = storage.ref(image[0].name);
      try {
        const uploadTask = imageRef.put(image[0]);
        uploadTask.on(
          'state_changed', // or 'state_changed'
          function(snapshot) {
            var progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'PAUSED': // or 'paused'
                console.log('Upload is paused');
                break;
              case 'RUNNING': // or 'running'
                console.log('Upload is running');
                break;
            }
          },
          function(error) {
            switch (error.code) {
              case 'storage/unauthorized':
                console.log('not auth');
                break;

              case 'storage/canceled':
                console.log('calcelled');
                break;

              case 'storage/unknown':
                console.log('unknown');
                break;
            }
          },
          function() {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref
              .getDownloadURL()
              .then(function(downloadURL) {
                console.log('File available at', downloadURL);
                const thumb = getThumbUrl(downloadURL);
                console.log(thumb, 'again');
              });
          }
        );
      } catch (error) {
        console.error(error);
      }
    }
  };
  render() {
    return (
      <div>
        <Dropzone onDrop={this.onDrop}>
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div
                {...getRootProps()}
                className={classNames('dropzone', {
                  'dropzone--isActive': isDragActive,
                })}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop files here...</p>
                ) : (
                  <p>
                    Try dropping some files here, or click to select files to
                    upload.
                  </p>
                )}
              </div>
            );
          }}
        </Dropzone>
        <button onClick={this.sendToFirebase}>Send to firebase</button>
      </div>
    );
  }
}

export default App;
