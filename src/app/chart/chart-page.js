import React, { Component } from 'react';
import { AtiBarChart,AtiCard } from 'ati-react-web';



class chart extends Component {
    render() {
        return (
            <AtiCard
                cardTitle='Grafik Keuangan'
                content={
                    <AtiBarChart
                dataSource={this.props.dataSource}
                dataBar={this.props.dataBar}
                width={'90%'}
                height={300}
            />
                }
                extraStyle={{'width':'100%'}}
                hoverable
                isLoading={false}
            
            />
            
        )
    }
}

export default chart