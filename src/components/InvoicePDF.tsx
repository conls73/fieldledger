import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Styles for PDF
const styles = StyleSheet.create({
  page: { flexDirection: 'column', backgroundColor: '#FFFFFF', padding: 40, fontFamily: 'Helvetica' },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#1a5f2e' },
  subtitle: { fontSize: 12, color: '#666666', marginTop: 4 },
  section: { margin: 10, padding: 10, flexGrow: 1 },
  text: { fontSize: 12, color: '#333333' },
  table: { display: "flex", width: "auto", borderStyle: "solid", borderWidth: 1, borderRightWidth: 0, borderBottomWidth: 0, marginTop: 20 },
  tableRow: { margin: "auto", flexDirection: "row" },
  tableCol: { width: "25%", borderStyle: "solid", borderWidth: 1, borderLeftWidth: 0, borderTopWidth: 0 },
  tableCell: { margin: "auto", marginTop: 5, fontSize: 10, padding: 4 }
});

export const InvoicePDF = ({ invoiceId }: { invoiceId: string }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>FieldLedger</Text>
          <Text style={styles.subtitle}>Premium Farm Invoicing</Text>
        </View>
        <View>
          <Text style={styles.text}>Invoice #: {invoiceId}</Text>
          <Text style={styles.text}>Date: {new Date().toLocaleDateString()}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.text}>Billed To:</Text>
        <Text style={styles.text}>Sample Customer</Text>
        <Text style={styles.text}>123 Farm Road, Suite A</Text>
      </View>
      
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Description</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Qty</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Unit Price</Text></View>
          <View style={styles.tableCol}><Text style={styles.tableCell}>Total</Text></View>
        </View>
        <View style={styles.tableRow}>
           <View style={styles.tableCol}><Text style={styles.tableCell}>Premium Seed Mix</Text></View>
           <View style={styles.tableCol}><Text style={styles.tableCell}>100</Text></View>
           <View style={styles.tableCol}><Text style={styles.tableCell}>$15.00</Text></View>
           <View style={styles.tableCol}><Text style={styles.tableCell}>$1,500.00</Text></View>
        </View>
      </View>
    </Page>
  </Document>
);
