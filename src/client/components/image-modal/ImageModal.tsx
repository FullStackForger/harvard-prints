import Modal, { ModalProps } from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import { FC } from "react";

import './imageModal.scss?global'

export type ImageModalProps = ModalProps & {
  src: string   
}

export const ImageModal: FC<ImageModalProps> = ({ src, ...rest }) => {
  return (
    <Modal
      {...rest}      
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='image-modal'
    >      
      <Modal.Body>
        <Image src={src} rounded  />        
      </Modal.Body>      
    </Modal>
  );
}
