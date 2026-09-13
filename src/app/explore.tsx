import { ScrollView, StyleSheet, Text, View } from 'react-native';

const focusAreas = [
  { number: '01', title: 'Memahami kebutuhan', text: 'Menyusun tujuan, alur pengguna, dan prioritas fitur sebelum mulai membuat tampilan.' },
  { number: '02', title: 'Membuat struktur', text: 'Mengubah ide menjadi layout yang rapi, responsif, dan mudah dipahami.' },
  { number: '03', title: 'Menguji dan belajar', text: 'Mencoba hasilnya, memperbaiki detail, dan terus belajar dari setiap proyek.' },
];

const tools = ['Figma', 'JavaScript', 'React Native', 'Expo', 'Kotlin', 'Git'];

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.topLine} />
      <Text style={styles.kicker}>EKSPLORASI</Text>
      <Text style={styles.title}>Cara saya mengembangkan ide menjadi karya digital.</Text>
      <Text style={styles.intro}>Setiap proyek adalah ruang untuk mencoba, memahami pengguna, dan membangun pengalaman yang lebih baik.</Text>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>PROSES KERJA</Text>
        {focusAreas.map((item) => (
          <View key={item.number} style={styles.processItem}>
            <Text style={styles.number}>{item.number}</Text>
            <View style={styles.processCopy}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemText}>{item.text}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>TOOLS YANG DIGUNAKAN</Text>
        <View style={styles.toolList}>
          {tools.map((tool) => <Text key={tool} style={styles.tool}>{tool}</Text>)}
        </View>
      </View>

      <View style={styles.note}>
        <Text style={styles.noteLabel}>FOKUS SAAT INI</Text>
        <Text style={styles.noteText}>Memperkuat frontend, mobile development, dan desain UI/UX melalui proyek nyata.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#03070d' },
  content: { padding: 22, paddingBottom: 48, maxWidth: 720, alignSelf: 'center', width: '100%' },
  topLine: { height: 3, width: 52, backgroundColor: '#3b9cff', marginBottom: 28 },
  kicker: { color: '#55aaf5', fontSize: 10, letterSpacing: 1.6, fontWeight: '800', marginBottom: 12 },
  title: { color: '#f1f6fc', fontSize: 28, lineHeight: 35, fontWeight: '800', marginBottom: 13 },
  intro: { color: '#9db0c4', fontSize: 15, lineHeight: 23, maxWidth: 600 },
  section: { borderTopWidth: 1, borderTopColor: '#183049', marginTop: 30, paddingTop: 18 },
  sectionLabel: { color: '#55708b', fontSize: 9, letterSpacing: 1.3, fontWeight: '800', marginBottom: 16 },
  processItem: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#14283e', paddingVertical: 14 },
  number: { color: '#55aaf5', fontSize: 12, fontWeight: '800', width: 42 },
  processCopy: { flex: 1 },
  itemTitle: { color: '#e9f3fc', fontSize: 16, fontWeight: '700', marginBottom: 5 },
  itemText: { color: '#8299b2', fontSize: 13, lineHeight: 20 },
  toolList: { flexDirection: 'row', flexWrap: 'wrap', gap: 9 },
  tool: { color: '#a8d7ff', backgroundColor: '#0c2945', borderWidth: 1, borderColor: '#1e5d91', paddingHorizontal: 13, paddingVertical: 8, fontSize: 12, fontWeight: '700' },
  note: { backgroundColor: '#08111e', borderWidth: 1, borderColor: '#14283e', padding: 18, marginTop: 30 },
  noteLabel: { color: '#55aaf5', fontSize: 9, letterSpacing: 1.3, fontWeight: '800', marginBottom: 8 },
  noteText: { color: '#d8e9f8', fontSize: 15, lineHeight: 22, fontWeight: '600' },
});
