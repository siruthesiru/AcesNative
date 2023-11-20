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

const SkillsRow = ({ itemName, itemValue }) => {
	return (
		<View>
			<TableWrapper style={styles.tableRow}>
				<Text>
					<Cell
						data={itemValue}
						style={styles.profileValue}
						textStyle={{
							fontSize: 16,
							// color: COLORS.white,
							fontWeight: "bold",
						}}
					/>
				</Text>
			</TableWrapper>
		</View>
	);
};

export default SkillsRow;

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
