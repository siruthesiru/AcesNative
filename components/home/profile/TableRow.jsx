import { StyleSheet } from "react-native";
import { Text, View } from "../../../components/Themed";
import { DataTable } from "react-native-paper";

import {
	Table,
	Row,
	Rows,
	Cell,
	Col,
	TableWrapper,
} from "react-native-table-component";

import { COLORS } from "../../../constants";

const TableRow = ({ itemName, itemValue }) => {
	return (
		<View>
			<TableWrapper style={styles.tableRow}>
				<Cell
					data={itemName}
					style={styles.profileField}
					textStyle={{ fontSize: 14, color: COLORS.white }}
				/>
				<Cell
					data={itemValue}
					style={styles.profileValue}
					textStyle={{
						fontSize: 16,
						color: COLORS.white,
						fontWeight: "bold",
					}}
				/>
			</TableWrapper>
		</View>
	);
};

export default TableRow;

const styles = StyleSheet.create({
	tableRow: {
		flexDirection: "row",
		marginBottom: 10,
	},
	profileField: {
		width: 100,
		paddingVertical: 0,
		marginRight: 40,
		maxHeight: 30,
	},
	profileValue: {
		paddingVertical: 0,
		flex: 1,
		flexWrap: "wrap",
	},
});
