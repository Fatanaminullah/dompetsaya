filterDataTable = () => {
    var data = this.props.report.filter(item => {
        var date = new Date(item.date)
        var dateState = new Date(this.state.date)
        var min = parseInt(this.state.minAmount)
        var max = parseInt(this.state.maxAmount)
        var notes = parseInt(this.state.notes)

        if (
            isNaN(parseInt(this.state.transactionTable)) &&
            isNaN(parseInt(this.state.categoryTable)) &&
            isNaN(min) &&
            isNaN(max) &&
            this.state.searchNotes.length === 0
        ) {
            return (
                date.getDate() === dateState.getDate()
            )
        } else if (
            isNaN(parseInt(this.state.transactionTable)) &&
            isNaN(parseInt(this.state.categoryTable)) &&
            isNaN(min) &&
            isNaN(max)
        ) {
            return (
                date.getDate() === dateState.getDate() &&
                item.notes.toLowerCase().includes(this.state.searchNotes)
            )
        }else if(
            isNaN(parseInt(this.state.transactionTable)) &&
            isNaN(parseInt(this.state.categoryTable)) &&
            isNaN(max) &&
            this.state.searchNotes.length === 0
            ){
            return(
                date.getDate() === dateState.getDate() &&
                item.amount >= min
            )
        }else if(
            isNaN(parseInt(this.state.transactionTable)) &&
            isNaN(parseInt(this.state.categoryTable)) &&
            isNaN(min) &&
            this.state.searchNotes.length === 0
        ){  
            return(
                date.getDate() === dateState.getDate() &&
                item.amount <= max
            )
        }else if(
            isNaN(parseInt(this.state.categoryTable)) &&
            isNaN(min) &&
            isNaN(max) &&
            this.state.searchNotes.length === 0
        ){
            return(
                date.getDate() === dateState.getDate() &&
                item.transactionId === this.state.transactionTable
            )

        }else if(
            isNaN(parseInt(this.state.transactionTable)) &&
            isNaN(parseInt(this.state.categoryTable)) &&
            this.state.searchNotes.length === 0
        ){
            return(
                date.getDate() === dateState.getDate() &&
                item.amount >= min &&
                item.amount <= max
            )
        }else if(
            this.state.searchNotes.length === 0 &&
            isNaN(min) &&
            isNaN(max)
        ){
            return(
                date.getDate() === dateState.getDate() &&
                item.transactionId === this.state.transactionTable &&
                item.categoryId === this.state.categoryTable
            )
        }else if(
            isNaN(parseInt(this.state.transactionTable)) &&
            isNaN(parseInt(this.state.categoryTable)) &&
            isNaN(max)
        ){
            return(
                date.getDate() === dateState.getDate() &&
                item.notes.toLowerCase().includes(this.state.searchNotes) &&
                item.amount >= min
            )
        }else if(
            isNaN(parseInt(this.state.transactionTable)) &&
            isNaN(parseInt(this.state.categoryTable)) &&
            isNaN(min)
        ){
            return(
                date.getDate() === dateState.getDate() &&
                item.notes.toLowerCase().includes(this.state.searchNotes) &&
                item.amount <= max
            )
        }else if(
            isNaN(max) &&
            isNaN(min)
        ){
            return(
                date.getDate() === dateState.getDate() &&
                item.notes.toLowerCase().includes(this.state.searchNotes) &&
                item.transactionId === this.state.transactionTable &&
                item.categoryId === this.state.categoryTable
            )
        }else if(
            isNaN(max) &&
            this.state.searchNotes.length === 0
        ){
            return(
                item.transactionId === this.state.transactionTable &&
                item.categoryId === this.state.categoryTable &&
                item.amount >= min
            )
        }else if(
            isNaN(min) &&
            this.state.searchNotes.length === 0
        ){
            return(
                item.transactionId === this.state.transactionTable &&
                item.categoryId === this.state.categoryTable &&
                item.amount <= max
            )
        }else if(
            isNaN(parseInt(this.state.transactionTable)) &&
            isNaN(parseInt(this.state.categoryTable))
        ){
            return(
                item.notes.toLowerCase().includes(this.state.searchNotes) &&
                item.amount <= max &&
                item.amount >= min
            )
        }else{
            return(
                item.transactionId === this.state.transactionTable &&
                item.categoryId === this.state.categoryTable &&
                item.notes.toLowerCase().includes(this.state.searchNotes) &&
                item.amount <= max &&
                item.amount >= min
            )
        }
    })
}