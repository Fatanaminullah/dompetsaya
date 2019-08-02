import React, { Component } from 'react';
import { AtiSideMenu } from 'ati-react-web';
import Chart from '../chart/chart-page.js'
import Input from '../input/input-page.js'
import Navbar from '../header/navbar.js'
// import logo from '../../assets/images/index.svg'
import man from '../../assets/images/profilepicture.jpg'
import woman from '../../assets/images/profilepicture2.jpg'
import '../../assets/css/App.css';

class dashboard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [
        { name: 'Agustus', in: 1000, out: 465 }
      ],
      dataBar: [
        { name: 'Pemasukan', key: 'in', fill: '#ff00ff' },
        { name: 'Pengeluaran', key: 'out', fill: '#00ffff' }
      ],
      pemasukan: 0,
      menu: [
        {
          key: '1',
          type: 'item',
          childComponent: 'Navigation One'
        },
        {
          key: '2',
          type: 'item',
        },
        {
          key: '3',
          type: 'item',
        }
      ]
    }
  }


  onItemsChanged = e => {
    this.setState({
      pemasukan: parseInt(e.value)
    })
  }
  inputPemasukan = () => {
    this.state.data[0].in += this.state.pemasukan

  }

  render() {
    return (
      <div className="d-flex">
        <AtiSideMenu
          dataSource={this.state.menu}
          style={{ width: '300px', height: '1000px', background: '#4169E1' }}
          defaultSelectedKeys={['1']}
        />
        <div>

        <div className='row'>
          <Navbar />
        </div>
        <div className='row'>
          <div className="container">
            <div className="row my-5">
              <div className="col-md-6">
                <Input
                  onItemsChanged={this.onItemsChanged.bind(this)}
                  inputPemasukan={this.inputPemasukan.bind(this)}
                />
              </div>
              <div className="col-md-6">
                <Chart
                  dataSource={this.state.data}
                  dataBar={this.state.dataBar}
                />
              </div>

            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default dashboard;
