import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import NotificationButton from '../NotificationButton';
import './styles.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/request";
import { Sale } from "../../models/sale";

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 1400));
    const max = new Date();

    //forma de declaracao de estado dentro de um component REACT
    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {

       
        const dmin = minDate.toISOString().slice(0, 10);
        const dmax = maxDate.toISOString().slice(0, 10);
        
        axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
            .then(response => {
                setSales(response.data.content);
            });
    }, [minDate, maxDate]);

    return (

        <div className="mtmeta-card">
            <h2 className="mtmeta-sales-title">Vendas</h2>
            <div>
                <div className="mtmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="mtmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />

                </div>
                <div className="mtmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
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
                        {sales.map(sale => {
                            return (
                                <tr key={sale.id}>
                                    <td className="show992">{sale.id}</td>
                                    <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                                    <td>{sale.sellerName}</td>
                                    <td className="show992">{sale.visited}</td>
                                    <td className="show992">{sale.deals}</td>
                                    <td>{sale.amount.toFixed(2)}</td>
                                    <td>
                                        <div className="mtmeta-red-btn-container">
                                            <NotificationButton saleId={sale.id} />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default SalesCard;