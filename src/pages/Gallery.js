import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import './Gall.css';

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 4;

  const photos = Array.from({ length: 8 }).map((_, idx) => ({
    id: idx,
    src: `${process.env.PUBLIC_URL}/images/dog${idx}.jpeg`,
    title: `토리 사진 ${idx + 1}`,
    description: ``,
  }));

  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleShowModal = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="gallery-container">
      <Row xs={1} md={2} className="g-4">
        {currentPhotos.map((photo) => (
          <Col key={photo.id}>
            <div className="gallery-card" onClick={() => handleShowModal(photo)}>
              <Card>
                <Card.Img variant="top" src={photo.src} className="card-img-top" />
                <Card.Body>
                  <Card.Title>{photo.title}</Card.Title>
                  <Card.Text>{photo.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>

      <div className="pagination-container">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => paginate(1)}>첫 페이지</button>
          </li>
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => paginate(currentPage - 1)}>이전</button>
          </li>
          <li className={`page-item ${currentPage === Math.ceil(photos.length / photosPerPage) ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => paginate(currentPage + 1)}>다음</button>
          </li>
          <li className={`page-item ${currentPage === Math.ceil(photos.length / photosPerPage) ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => paginate(Math.ceil(photos.length / photosPerPage))}>마지막 페이지</button>
          </li>
        </ul>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedPhoto && selectedPhoto.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPhoto && (
            <img src={selectedPhoto.src} alt={selectedPhoto.title} className="modal-image" />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Gallery;
