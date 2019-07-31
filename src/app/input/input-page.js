import React, { Component } from 'react';
import { AtiCard, AtiTextInputNumeric, AtiDatePicker, AtiTextbox, AtiButton } from 'ati-react-web';
import '../../assets/css/input-page.css'


class input extends Component {
    constructor(props) {
        super(props);
      }
    

    render() {
        return (
            <div className='d-flex flex-column group-input'>
                <div className='px-4'>
                    <p className='text-center'>Tanggal</p>
                    <AtiDatePicker 
                                    value={Date.now()}
                                    dateFormat="DD-MM-YYYY"
                                />
                </div>


            <div className='row'>
                <div className="col-6">
                    <AtiCard
                        cardTitle='Input Pemasukan'
                        extraStyle={{ 'width': '100%' }}
                        isLoading={false}
                        content={
                            <div>
                                
                                <AtiTextbox 
                                    label='Perihal'
                                />
                                <AtiTextInputNumeric id="currency" name="currency" label="Jumlah"
                                    className="text-input-numeric-custom" thousandSeparator={true} prefix="Rp"
                                    suffix=",-"
                                    events={
                                        {
                                            onValueChange: this.props.onItemsChanged
                                            
                                        }
                                    }
                                />
                                <AtiButton 
                                    text='input'
                                    className='btn-block'
                                    events={
                                        {onClick:this.props.inputPemasukan}
                                    }
                                />
                            </div>
                        }
                    />
                </div>
                <div className='col-6'>
                    <AtiCard
                        cardTitle='Input Pengeluaran'
                        extraStyle={{ 'width': '100%' }}
                        isLoading={false}
                        content={
                            <div>
                                <AtiTextbox 
                                    label='Perihal'
                                />
                                <AtiTextInputNumeric id="currency" name="currency" label="Jumlah"
                                    className="text-input-numeric-custom" thousandSeparator={true} prefix="Rp"
                                    suffix=",-"
                                    events={
                                        {
                                            onItemsChanged: this.props.onItemsChanged
                                        }
                                    }
                                />
                                <AtiButton 
                                    text='input'
                                    className='btn-block'
                                />
                            </div>
                        }
                    />

                </div>
            </div>
            </div>

        )
    }

}

export default input