import React from 'react';
import BinItem from './bin_item';
import {List} from 'material-ui/List';
class BinList extends React.Component {
    constructor() {
        super();
    }
    render() {
        const parent = this;
        return <List>
            {
                parent.props.bins.map(function(bin, index){
                    return <BinItem bin={bin} key={index}/>
                })
            }
        </List>
    }
}
export {BinList};
export default BinList;