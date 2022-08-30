function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
	var dataset =  DatasetBuilder.newDataset(); 

	dataset.addColumn("simbolo");
	dataset.addColumn("nomeMoeda");

	dataset.addrRow(new Array ("R$", "Real"));
	dataset.addRow(new Array ("US$", "Dolar"));
	dataset.addRow(new Array ("U$", "Peso"));

	return dataset; 
}
function onMobileSync(user){


}
