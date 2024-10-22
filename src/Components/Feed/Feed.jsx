import React from 'react';
import FeedModal from '../Feed/FeedModal';
import FeedPhotos from '../Feed/FeedPhotos';

const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} />}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  )
}

export default Feed