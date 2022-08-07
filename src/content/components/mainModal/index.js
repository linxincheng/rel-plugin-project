import React, { useEffect } from 'react'
import './mainModal.styl'
import Modal from 'antd/es/modal'
import 'antd/es/modal/style/index.css'

function MainModal(props) {
    // 接收父组件控制本组件关闭的方法
    const { onClose } = props

    useEffect(() => {
        
    }, [])

    return (
        <Modal
            className="CRX-mainModal CRX-antd-diy"
            visible={true}
            title={'收藏'}
            footer={null}
            maskClosable={false}
            onCancel={() => {
                onClose && onClose()
            }}
            width={600}
        >
            暂无，待补充收藏逻辑
        </Modal>
    )
}

export default MainModal
