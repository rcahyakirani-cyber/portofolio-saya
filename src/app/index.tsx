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
        <View style={styles.identityBlock}>
          <View style={styles.avatarFrame}>
            <Image source={fotoProfil} style={styles.avatarImage} resizeMode="cover" />
          </View>
          <View style={styles.headerCopy}>
            <Text style={styles.name}>Raisyah Cahya Kirani</Text>
            <Text style={styles.title}>Frontend Developer dan UI/UX Designer</Text>
            <View style={styles.availabilityRow}><View style={styles.statusDot} /><Text style={styles.availability}>Pelajar SMK NEGRI 10 Jakarta</Text></View>
          </View>
        </View>
        <Text style={styles.intro}>Fokus membangun solusi digital yang fungsional dan mudah digunakan.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.cardTitle}>Tentang saya</Text>
        <Text style={styles.cardText}>Saya Raisyah Cahya Kirani, pelajar yang memiliki minat pada pengembangan aplikasi mobile dan web, frontend, dan desain UI/UX. Saya senang mengubah ide menjadi tampilan yang terstruktur serta terus belajar melalui proyek nyata.</Text>
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
        <Text style={styles.cardTitle}>Pengalaman</Text>
        <View style={styles.timelineItem}><View style={styles.timelineLine} /><View style={styles.timelineContent}><Text style={styles.timelinePeriod}>PROYEK SEKOLAH & PERSONAL</Text><Text style={styles.timelineTitle}>Pengembangan aplikasi dan desain digital</Text><Text style={styles.cardText}>Merancang UI/UX di Figma, membuat aplikasi Android dengan Java/Kotlin, serta membangun proyek interaktif menggunakan JavaScript dan React Native/Expo dan Node.js.</Text></View></View>
        <View style={styles.timelineItem}><View style={styles.timelineLine} /><View style={styles.timelineContent}><Text style={styles.timelinePeriod}>TARGET PKL</Text><Text style={styles.timelineTitle}>Ruang kolaborasi untuk terus belajar dan berkembang</Text><Text style={styles.cardText}>Siap menerima arahan, bekerja kolaboratif, dan mengembangkan kebiasaan kerja yang teliti selama praktik kerja lapangan.</Text></View></View>
      </View>

      <View style={styles.section}>
        <Text style={styles.cardTitle}>Keahlian</Text>
        <View style={styles.skillContainer}>{['UI/UX Design', 'JavaScript', 'React Native', 'Kotlin', 'CSS', 'Git dasar', 'Problem Solving'].map((skill) => <Text key={skill} style={styles.badge}>{skill}</Text>)}</View>
      </View>

      <View>
        <View style={styles.sectionHeader}><Text style={styles.sectionTitle}>Proyek yang pernah dibuat</Text></View>
        {projects.map((item) => <View key={item.id} style={styles.projectCard}>
          <Image source={item.image} style={[styles.projectImage, { aspectRatio: item.aspectRatio }]} resizeMode="contain" />
          <View style={styles.projectBody}><Text style={styles.projectCategory}>{item.category}</Text><Text style={styles.projectTitle}>{item.title}</Text><Text style={styles.projectDescription}>{item.description}</Text></View>
        </View>)}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#050a12' },
  content: { padding: 22, paddingBottom: 48, maxWidth: 720, alignSelf: 'center', width: '100%' },
  header: { marginBottom: 28 },
  identityBlock: { flexDirection: 'row', alignItems: 'flex-start', gap: 18 },
  avatarFrame: { width: 106, height: 122, padding: 5, overflow: 'hidden', borderRadius: 58, borderWidth: 1, borderColor: '#285781', backgroundColor: '#0c1b2d' },
  avatarImage: { width: 96, height: 112, backgroundColor: '#0c1b2d', borderRadius: 52, transform: [{ scale: 1.35 }, { translateY: -8 }] },
  headerCopy: { flex: 1, minWidth: 0, paddingTop: 4 },
  name: { fontSize: 29, fontWeight: '800', color: '#edf5fc', marginBottom: 5 },
  title: { fontSize: 13, color: '#9eb4c9', fontWeight: '600' },
  availabilityRow: { flexDirection: 'row', alignItems: 'center', marginTop: 13, gap: 7 },
  statusDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: '#4dc995' },
  availability: { fontSize: 10, color: '#79d2a5', fontWeight: '700' },
  intro: { color: '#8ba2b8', fontSize: 15, lineHeight: 23, marginTop: 22, maxWidth: 600 },
  section: { borderTopWidth: 1, borderTopColor: '#1b3854', paddingTop: 22, marginTop: 18, marginBottom: 18 },
  cardTitle: { fontSize: 24, lineHeight: 30, color: '#edf5fc', fontWeight: '800', marginBottom: 14 },
  cardText: { fontSize: 14, color: '#9eb3c7', lineHeight: 23 },
  detailGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24, borderTopWidth: 1, borderTopColor: '#1b3854', marginTop: 26, paddingTop: 18 },
  detailItem: { minWidth: 100 },
  detailLabel: { fontSize: 10, color: '#6d8ba5', fontWeight: '800', marginBottom: 5 },
  detailValue: { color: '#d8e9f8', fontSize: 13, fontWeight: '700' },
  contactBlock: { borderTopWidth: 1, borderTopColor: '#1b3854', marginTop: 26, paddingTop: 18 },
  phoneNumber: { color: '#72c2ff', fontSize: 20, fontWeight: '800', letterSpacing: 0.5, marginTop: 4 },
  copyHint: { color: '#718ba3', fontSize: 11, marginTop: 5 },
  timelineItem: { flexDirection: 'row', marginTop: 7, minHeight: 100 },
  timelineLine: { width: 2, backgroundColor: '#2d79b5', marginRight: 16, marginVertical: 4 },
  timelineContent: { flex: 1, paddingBottom: 16 },
  timelinePeriod: { color: '#6db5e8', fontSize: 10, fontWeight: '800', marginBottom: 6 },
  timelineTitle: { color: '#e5f1fb', fontSize: 16, fontWeight: '700', marginBottom: 6 },
  skillContainer: { flexDirection: 'row', flexWrap: 'wrap', columnGap: 20, rowGap: 12 },
  badge: { color: '#a8d7ff', paddingBottom: 5, borderBottomWidth: 1, borderBottomColor: '#286594', fontSize: 13, fontWeight: '700' },
  sectionHeader: { marginBottom: 22 },
  sectionTitle: { fontSize: 22, color: '#edf5fc', fontWeight: '800' },
  projectCard: { overflow: 'hidden', marginBottom: 30 },
  projectImage: { width: '100%', maxHeight: 460, backgroundColor: '#0b1420', borderRadius: 10 },
  projectBody: { paddingTop: 14 },
  projectCategory: { color: '#6db5e8', fontSize: 10, fontWeight: '800', marginBottom: 7 },
  projectTitle: { fontSize: 19, color: '#edf5fc', fontWeight: '800', marginBottom: 7 },
  projectDescription: { fontSize: 14, color: '#9eb3c7', lineHeight: 21, marginBottom: 15 },
});