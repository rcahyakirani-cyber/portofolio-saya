import { Image, ImageSourcePropType, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

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
  note: string;
  image: ImageSourcePropType;
  aspectRatio: number;
}

const projects: Project[] = [
  { id: 1, title: 'Desain Aplikasi Instagram', category: 'Figma', description: 'Saya mencoba menyusun ulang beberapa layar Instagram di Figma untuk latihan layout dan pemilihan warna.', note: 'Bagian yang paling lama: menyesuaikan jarak antar elemen supaya layar tidak terasa penuh.', image: gambar1, aspectRatio: 635 / 707 },
  { id: 2, title: 'ReWear', category: 'Aplikasi mobile', description: 'Ide aplikasi thrifting untuk tugas sekolah. Saya membuat alur dari memilih barang sampai melihat detail produk.', note: 'Dari sini saya belajar bahwa alur sederhana lebih enak dipakai daripada terlalu banyak menu.', image: gambar2, aspectRatio: 364 / 651 },
  { id: 3, title: 'ReadEase', category: 'Aplikasi mobile', description: 'Aplikasi peminjaman buku yang saya buat untuk membayangkan proses booking di perpustakaan.', note: 'Saya masih banyak memperbaiki tampilan daftar buku agar informasinya mudah dicari.', image: gambar3, aspectRatio: 715 / 1600 },
  { id: 4, title: 'Flappy Bird', category: 'JavaScript', description: 'Game kecil untuk latihan JavaScript. Pemain harus menjaga burung tetap terbang dan melewati pipa.', note: 'Tantangannya ada di gerakan dan benturan, karena sedikit salah hitung game langsung terasa aneh.', image: gambar4, aspectRatio: 617 / 650 },
  { id: 5, title: 'MyQuran', category: 'React.js', description: 'Website sederhana untuk melihat daftar surah dan informasi ayat menggunakan React.js.', note: 'Proyek ini membantu saya memahami cara membagi tampilan menjadi komponen kecil.', image: gambar5, aspectRatio: 1912 / 895 },
];

export default function Home() {
  const { width } = useWindowDimensions();
  const isWideScreen = width >= 700;

  return (
    <ScrollView style={styles.container} contentContainerStyle={[styles.content, !isWideScreen && styles.contentSmall]} showsVerticalScrollIndicator={false}>
      <View style={[styles.header, !isWideScreen && styles.headerSmall]}>
        <View style={[styles.heroCopy, !isWideScreen && styles.heroCopySmall]}>
          <Text style={styles.sectionKicker}>INTRODUCTION</Text>
          <Text style={styles.name}>Raisyah Cahya Kirani</Text>
          <Text style={styles.title}>Pelajar SMK Negeri 10 Jakarta</Text>
          <Text style={styles.intro}>Saya sedang belajar membuat website, aplikasi, dan desain antarmuka. Ini beberapa hal yang pernah saya kerjakan di sekolah dan di waktu luang.</Text>
          <View style={styles.availabilityRow}><View style={styles.statusDot} /><Text style={styles.availability}>Terbuka untuk belajar</Text></View>
        </View>
        <View style={[styles.heroVisual, !isWideScreen && styles.heroVisualSmall]}>
          <View style={styles.avatarFrame}>
            <Image source={fotoProfil} style={styles.avatarImage} resizeMode="cover" />
          </View>
        </View>
      </View>

      <View style={[styles.infoGrid, !isWideScreen && styles.infoGridSmall]}>
        <View style={styles.infoBlock}>
          <Text style={styles.sectionKicker}>EDUCATION</Text>
          <Text style={styles.infoTitle}>SMK Negeri 10 Jakarta</Text>
          <Text style={styles.cardText}>Pelajar yang sedang memperdalam frontend, aplikasi mobile, dan desain UI/UX.</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.sectionKicker}>EXPERIENCE</Text>
          <Text style={styles.infoTitle}>Proyek sekolah dan personal</Text>
          <Text style={styles.cardText}>Mencoba membuat desain di Figma, aplikasi Android dengan Java/Kotlin, dan latihan web dengan JavaScript serta React Native.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionKicker}>SKILLS</Text>
        <Text style={styles.cardTitle}>Yang sedang dipelajari</Text>
        <View style={styles.skillContainer}>{['UI/UX Design', 'JavaScript', 'React Native', 'Kotlin', 'CSS', 'Git dasar', 'Problem Solving'].map((skill) => <Text key={skill} style={styles.badge}>{skill}</Text>)}</View>
      </View>

      <View>
        <View style={styles.sectionHeader}><Text style={styles.sectionKicker}>MY PROJECTS</Text><Text style={styles.sectionTitle}>Beberapa karya yang pernah saya buat.</Text></View>
        <View style={styles.projectGrid}>
          {projects.map((item) => <View key={item.id} style={[styles.projectCard, isWideScreen && styles.projectCardWide]}>
            <Image source={item.image} style={[styles.projectImage, { aspectRatio: item.aspectRatio }]} resizeMode="contain" />
            <View style={styles.projectBody}><Text style={styles.projectCategory}>{item.category}</Text><Text style={styles.projectTitle}>{item.title}</Text><Text style={styles.projectDescription}>{item.description}</Text><Text style={styles.projectNote}>{item.note}</Text></View>
          </View>)}
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#e2d1bd' },
  content: { padding: 24, paddingBottom: 64, maxWidth: 900, alignSelf: 'center', width: '100%' },
  contentSmall: { paddingHorizontal: 18, paddingBottom: 44 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 24, paddingVertical: 34, marginBottom: 18 },
  headerSmall: { flexDirection: 'column', alignItems: 'stretch', gap: 18, paddingVertical: 24, marginBottom: 8 },
  heroCopy: { flex: 1, minWidth: 0 },
  heroCopySmall: { width: '100%' },
  heroVisual: { width: 140, alignItems: 'center' },
  heroVisualSmall: { width: '100%', alignItems: 'flex-start' },
  avatarFrame: { width: 116, height: 146, padding: 5, overflow: 'hidden', borderRadius: 60, borderWidth: 1, borderColor: '#984c5d', backgroundColor: '#c5a68d' },
  avatarImage: { width: 106, height: 136, backgroundColor: '#c5a68d', borderRadius: 54, transform: [{ scale: 1.35 }, { translateY: -8 }] },
  title: { fontSize: 14, lineHeight: 21, color: '#64474b', fontWeight: '600', maxWidth: 430 },
  availabilityRow: { flexDirection: 'row', alignItems: 'center', marginTop: 13, gap: 7 },
  statusDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: '#843b4d' },
  availability: { fontSize: 11, color: '#743445', fontWeight: '700' },
  section: { paddingTop: 18, marginTop: 26, marginBottom: 28 },
  sectionKicker: { color: '#843b4d', fontSize: 10, letterSpacing: 1.5, fontWeight: '800', marginBottom: 8 },
  cardTitle: { fontSize: 23, lineHeight: 29, color: '#4a3034', fontWeight: '800', marginBottom: 14, maxWidth: 620 },
  cardText: { fontSize: 15, color: '#684f4b', lineHeight: 24, maxWidth: 680 },
  infoGrid: { flexDirection: 'row', gap: 32, marginTop: 12, marginBottom: 12 },
  infoGridSmall: { flexDirection: 'column', gap: 8 },
  infoBlock: { flex: 1, paddingVertical: 10 },
  infoTitle: { color: '#5b3e42', fontSize: 17, fontWeight: '800', marginBottom: 8 },
  detailGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 34, marginTop: 24, paddingTop: 10 },
  detailItem: { minWidth: 100 },
  detailLabel: { fontSize: 10, color: '#8b6560', fontWeight: '800', marginBottom: 5 },
  detailValue: { color: '#5b3e42', fontSize: 14, fontWeight: '700' },
  contactBlock: { marginTop: 24, paddingTop: 10 },
  phoneNumber: { color: '#843b4d', fontSize: 20, fontWeight: '800', letterSpacing: 0.5, marginTop: 4 },
  copyHint: { color: '#8a6d68', fontSize: 11, marginTop: 5 },
  timelineItem: { flexDirection: 'row', marginTop: 18, minHeight: 100, paddingLeft: 2 },
  timelineLine: { width: 3, backgroundColor: '#9b5361', marginRight: 16, marginVertical: 4, borderRadius: 2 },
  timelineContent: { flex: 1, paddingBottom: 16 },
  timelinePeriod: { color: '#843b4d', fontSize: 10, fontWeight: '800', marginBottom: 6 },
  timelineTitle: { color: '#5b3e42', fontSize: 17, fontWeight: '700', marginBottom: 6 },
  skillContainer: { flexDirection: 'row', flexWrap: 'wrap', columnGap: 20, rowGap: 12 },
  badge: { color: '#743445', paddingBottom: 6, borderBottomWidth: 1, borderBottomColor: '#b88788', fontSize: 14, fontWeight: '700' },
  sectionHeader: { marginBottom: 22 },
  sectionTitle: { fontSize: 25, lineHeight: 31, color: '#4a3034', fontWeight: '800' },
  projectGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 20 },
  projectCard: { width: '100%', overflow: 'hidden', marginBottom: 12, backgroundColor: '#eadccd', borderRadius: 8, padding: 12 },
  projectCardWide: { width: '47%' },
  projectImage: { width: '100%', height: 190, backgroundColor: '#d2bbaa', borderRadius: 5 },
  projectBody: { paddingTop: 14 },
  projectCategory: { color: '#843b4d', fontSize: 10, letterSpacing: 1.2, fontWeight: '800', marginBottom: 7 },
  projectTitle: { fontSize: 21, color: '#4a3034', fontWeight: '800', marginBottom: 7 },
  projectDescription: { fontSize: 14, color: '#684f4b', lineHeight: 21, marginBottom: 15 },
  projectNote: { fontSize: 13, color: '#8a6d68', lineHeight: 19, fontStyle: 'italic' },
});