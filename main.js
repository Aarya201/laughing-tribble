var asset_name = [""]
var liability_name = ["a"]
var asset_amount = [0,0]
var liability_amount = [0,0]
var total_asset_amount = [0]
var total_liability_amount = [0]
var total_amount
var abcd = 0

function asset() {
    asset_name.push(document.getElementById('an').value)
    document.getElementById('assen').innerHTML = asset_name
}

