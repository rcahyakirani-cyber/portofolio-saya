import { Image, ImageSourcePropType, ScrollView, StyleSheet, Text, View } from 'react-native';

const gambar1 = require('../../assets/images/proyek1.png');
const gambar2 = require('../../assets/images/proyek2.png');
const gambar3 = require('../../assets/images/proyek3.jpeg');
const gambar4 = require('../../assets/images/proyek4.png');
const gambar5 = require('../../assets/images/proyek5.png');
const fotoProfil = require('../../assets/images/photoprofile.png');

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: ImageSourcePropType;
  aspectRatio: number;
}

const projects: Project[] = [
  { id: 1, title: 'Desain Aplikasi Instagram', category: 'UI/UX DESIGN', description: 'Eksplorasi desain antarmuka dan pengalaman pengguna aplikasi sosial media menggunakan Figma.', image: gambar1, aspectRatio: 635 / 707 },
  { id: 2, title: 'ReWear', category: 'MOBILE APP', description: 'Konsep aplikasi thrifting mobile dengan fokus pada alur belanja yang sederhana dan nyaman.', image: gambar2, aspectRatio: 364 / 651 },
  { id: 3, title: 'ReadEase', category: 'MOBILE APP', description: 'Aplikasi booking buku untuk memudahkan pengguna meminjam buku di perpustakaan.', image: gambar3, aspectRatio: 715 / 1600 },
  { id: 4, title: 'Flappy Bird', category: 'JAVASCRIPT', description: 'Game sederhana berbasis JavaScript dengan tantangan mengatur gerakan dan melewati rintangan.', image: gambar4, aspectRatio: 617 / 650 },
  { id: 5, title: 'MyQuran', category: 'REACT.JS', description: 'Website Al-Quran berbasis React.js untuk melihat daftar surah dan informasi ayat dengan tampilan yang bersih.', image: gambar5, aspectRatio: 1912 / 895 },
];

export default function Home() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
          <View style={styles.heroVisual}>
          <View style={styles.avatarFrame}>
            <Image source={fotoProfil} style={styles.avatarImage} resizeMode="cover" />
          </View>
        </View>
          <View style={styles.heroCopy}>
          <Text style={styles.name}>Raisyah Cahya Kirani</Text>
          <Text style={styles.title}>Pelajar SMK Negeri 10 Jakarta</Text>
            <Text style={styles.intro}>Saya sedang belajar membuat website, aplikasi, dan desain antarmuka.</Text>
          <View style={styles.availabilityRow}><View style={styles.statusDot} /><Text style={styles.availability}>Terbuka untuk belajar</Text></View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.cardTitle}>Tentang saya</Text>
        <Text style={styles.cardText}>Saya tertarik dengan frontend, aplikasi mobile, dan UI/UX. Sebagian besar proyek di sini dibuat untuk tugas sekolah, latihan, atau mencoba hal baru.</Text>
        <View style={styles.detailGrid}>
          <View style={styles.detailItem}><Text style={styles.detailLabel}>Fokus</Text><Text style={styles.detailValue}>Mobile dan Web</Text></View>
          <View style={styles.detailItem}><Text style={styles.detailLabel}>Domisili</Text><Text style={styles.detailValue}>Jakarta</Text></View>
          <View style={styles.detailItem}><Text style={styles.detailLabel}>Status</Text><Text style={styles.detailValue}>Pelajar</Text></View>
        </View>
        <View style={styles.contactBlock}>
          <Text style={styles.detailLabel}>Kontak</Text>
          <Text style={styles.phoneNumber} selectable>+62 882-9157-2296</Text>
          <Text style={styles.copyHint}>Tekan lama nomor untuk menyalin</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.cardTitle}>Pengalaman belajar</Text>
        <View style={styles.timelineItem}><View style={styles.timelineLine} /><View style={styles.timelineContent}><Text style={styles.timelinePeriod}>PROYEK SEKOLAH & PERSONAL</Text><Text style={styles.timelineTitle}>Pengembangan aplikasi dan desain digital</Text><Text style={styles.cardText}>Merancang UI/UX di Figma, membuat aplikasi Android dengan Java/Kotlin, serta membangun proyek interaktif menggunakan JavaScript dan React Native/Expo dan Node.js.</Text></View></View>
        <View style={styles.timelineItem}><View style={styles.timelineLine} /><View style={styles.timelineContent}><Text style={styles.timelinePeriod}>TARGET PKL</Text><Text style={styles.timelineTitle}>Ruang kolaborasi untuk terus belajar dan berkembang</Text><Text style={styles.cardText}>Siap menerima arahan, bekerja kolaboratif, dan mengembangkan kebiasaan kerja yang teliti selama praktik kerja lapangan.</Text></View></View>
      </View>

      <View style={styles.section}>
        <Text style={styles.cardTitle}>Yang sedang dipelajari</Text>
        <View style={styles.skillContainer}>{['UI/UX Design', 'JavaScript', 'React Native', 'Kotlin', 'CSS', 'Git dasar', 'Problem Solving'].map((skill) => <Text key={skill} style={styles.badge}>{skill}</Text>)}</View>
      </View>

      <View>
        <View style={styles.sectionHeader}><Text style={styles.sectionTitle}>Proyek saya</Text></View>
        {projects.map((item) => <View key={item.id} style={styles.projectCard}>
          <Image source={item.image} style={[styles.projectImage, { aspectRatio: item.aspectRatio }]} resizeMode="contain" />
          <View style={styles.projectBody}><Text style={styles.projectCategory}>{item.category}</Text><Text style={styles.projectTitle}>{item.title}</Text><Text style={styles.projectDescription}>{item.description}</Text></View>
        </View>)}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#252223' },
  content: { padding: 24, paddingBottom: 64, maxWidth: 820, alignSelf: 'center', width: '100%' },
  header: { flexDirection: 'row', alignItems: 'center', gap: 24, paddingVertical: 30, marginBottom: 26 },
  heroCopy: { flex: 1, minWidth: 0 },
  heroVisual: { width: 140, alignItems: 'center' },
  avatarFrame: { width: 116, height: 146, padding: 5, overflow: 'hidden', borderRadius: 60, borderWidth: 1, borderColor: '#9c5660', backgroundColor: '#3a292b' },
  avatarImage: { width: 106, height: 136, backgroundColor: '#3a292b', borderRadius: 54, transform: [{ scale: 1.35 }, { translateY: -8 }] },
  title: { fontSize: 14, lineHeight: 21, color: '#f0ded9', fontWeight: '600', maxWidth: 430 },
  availabilityRow: { flexDirection: 'row', alignItems: 'center', marginTop: 13, gap: 7 },
  statusDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: '#d9a6a0' },
  availability: { fontSize: 11, color: '#d9a6a0', fontWeight: '700' },
  section: { paddingTop: 18, marginTop: 26, marginBottom: 28 },
  sectionKicker: { color: '#e1a6a2', fontSize: 10, letterSpacing: 1.5, fontWeight: '800', marginBottom: 8 },
  cardTitle: { fontSize: 23, lineHeight: 29, color: '#fff4f0', fontWeight: '800', marginBottom: 14, maxWidth: 620 },
  cardText: { fontSize: 15, color: '#ead8d4', lineHeight: 24, maxWidth: 680 },
  detailGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 34, marginTop: 24, paddingTop: 10 },
  detailItem: { minWidth: 100 },
  detailLabel: { fontSize: 10, color: '#d0aaa6', fontWeight: '800', marginBottom: 5 },
  detailValue: { color: '#fff0eb', fontSize: 14, fontWeight: '700' },
  contactBlock: { marginTop: 24, paddingTop: 10 },
  phoneNumber: { color: '#f0b8b2', fontSize: 20, fontWeight: '800', letterSpacing: 0.5, marginTop: 4 },
  copyHint: { color: '#cba9a5', fontSize: 11, marginTop: 5 },
  timelineItem: { flexDirection: 'row', marginTop: 18, minHeight: 100, paddingLeft: 2 },
  timelineLine: { width: 3, backgroundColor: '#a45b66', marginRight: 16, marginVertical: 4, borderRadius: 2 },
  timelineContent: { flex: 1, paddingBottom: 16 },
  timelinePeriod: { color: '#e1a6a2', fontSize: 10, fontWeight: '800', marginBottom: 6 },
  timelineTitle: { color: '#fff0eb', fontSize: 17, fontWeight: '700', marginBottom: 6 },
  skillContainer: { flexDirection: 'row', flexWrap: 'wrap', columnGap: 20, rowGap: 12 },
  badge: { color: '#e2b5ad', paddingBottom: 6, borderBottomWidth: 1, borderBottomColor: '#9c5660', fontSize: 14, fontWeight: '700' },
  sectionHeader: { marginBottom: 22 },
  sectionTitle: { fontSize: 25, lineHeight: 31, color: '#fff4f0', fontWeight: '800' },
  projectCard: { flexDirection: 'row', gap: 22, overflow: 'hidden', marginBottom: 34, paddingBottom: 8 },
  projectImage: { width: '42%', minHeight: 150, backgroundColor: '#382b2d', borderRadius: 8 },
  projectBody: { flex: 1, paddingTop: 4 },
  projectCategory: { color: '#e1a6a2', fontSize: 10, letterSpacing: 1.2, fontWeight: '800', marginBottom: 7 },
  projectTitle: { fontSize: 21, color: '#fff4f0', fontWeight: '800', marginBottom: 7 },
  projectDescription: { fontSize: 14, color: '#ead8d4', lineHeight: 21, marginBottom: 15 },
});