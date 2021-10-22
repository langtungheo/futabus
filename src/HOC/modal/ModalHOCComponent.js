import React from 'react';
import { Modal } from 'react-responsive-modal';
import { useSelector, useDispatch } from 'react-redux';
import { SET_DISIBLE_MODAL } from '../../redux/const/modalConst';

export default function ModalHOCComponent() {
    const {visible, Component} = useSelector(state => state.modal)
    const dispatch = useDispatch()
    return (
        <div>
            <Modal open={visible} onClose={() => {
                dispatch({type : SET_DISIBLE_MODAL})
            }} center blockScroll={false}>
                {Component}
            </Modal>
        </div>
    )
}
