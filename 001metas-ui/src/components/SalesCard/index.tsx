import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import NotificationButton from '../NotificationButton';
import './styles.css';
import { useState } from "react";

function SalesCard() {

    
    //forma de declaracao de estado dentro de um component REACT
    const [minDate, setMinDate] = useState(new Date());
    const [maxDate, setMaxDate] = useState(new Date());


    return (

        <div className="mtmeta-card">
            <h2 className="mtmeta-sales-title">Vendas</h2>
            <div>
                <div className="mtmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => { }}
                        className="mtmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />

                </div>
                <div className="mtmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => { }}
                        className="mtmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />

                </div>
            </div>

            <div>
                <table className="mtmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="mtmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="mtmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="mtmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default SalesCard