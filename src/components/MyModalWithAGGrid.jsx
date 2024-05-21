
import { useState } from 'react';
import { Modal, Button } from 'antd';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const MyModalWithAGGrid = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [rowData] = useState([
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxster', price: 72000 },
    ]);

    const [columnDefs] = useState([
        { headerName: 'CheckBox', checkboxSelection: true },
        { headerName: 'Make', field: 'make' },
        { headerName: 'Model', field: 'model' },
        { headerName: 'Price', field: 'price' },
        { headerName: 'CheckBox', checkboxSelection: true }
    ]);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Open Modal with AG Grid
            </Button>
            <Modal
                title="AG Grid in Ant Design Modal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={800}
            >
                <div className="ag-theme-alpine-dark" style={{ height: 400, width: '100%' }}>
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={columnDefs}
                    />
                </div>
            </Modal>
        </div>
    );
};

export default MyModalWithAGGrid;
