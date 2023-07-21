import React from 'react';
import './Rightside.css';
import { TopServices } from '../Data/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

// import TopServices from './Components/Data/Data';
const Rightside = () => {
    return (
        <div className="right-side">
            <div className="top-Service">
                <table className="table bg-light fixed-start">
                    <thead>
                        <div className="h1">Top Services</div>
                        <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">Sevice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TopServices.map((item, index) => {
                            return (
                                <tr>
                                    <td>{item.rank}</td>
                                    <td>{item.service}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Rightside;
