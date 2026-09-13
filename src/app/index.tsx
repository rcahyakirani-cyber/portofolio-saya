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
        <View style={styles.timelineItem}><View style={styles.timelineLine} /><View style={styles.timelineContent}><Text style={styles.timelinePeriod}>YANG SUDAH DICOBA</Text><Text style={styles.timelineTitle}>Membuat tampilan dan aplikasi dari nol</Text><Text style={styles.cardText}>Saya pernah mengerjakan desain di Figma, aplikasi Android dengan Java/Kotlin, dan beberapa latihan web memakai JavaScript, React Native, Expo, serta Node.js.</Text></View></View>
        <View style={styles.timelineItem}><View style={styles.timelineLine} /><View style={styles.timelineContent}><Text style={styles.timelinePeriod}>BAGIAN YANG MASIH DIPELAJARI</Text><Text style={styles.timelineTitle}>Merapikan kode dan membuat tampilan lebih nyaman</Text><Text style={styles.cardText}>Saya masih belajar membagi pekerjaan menjadi langkah kecil, mencari penyebab error, dan meminta masukan supaya hasilnya tidak hanya terlihat bagus tetapi juga bisa dipakai.</Text></View></View>
      </View>

      <View style={styles.section}>
        <Text style={styles.cardTitle}>Yang sedang dipelajari</Text>
        <View style={styles.skillContainer}>{['UI/UX Design', 'JavaScript', 'React Native', 'Kotlin', 'CSS', 'Git dasar', 'Problem Solving'].map((skill) => <Text key={skill} style={styles.badge}>{skill}</Text>)}</View>
      </View>

      <View>
        <View style={styles.sectionHeader}><Text style={styles.sectionTitle}>Proyek saya</Text></View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.projectList}>
          {projects.map((item) => <View key={item.id} style={styles.projectCard}>
            <Image source={item.image} style={[styles.projectImage, { aspectRatio: item.aspectRatio }]} resizeMode="contain" />
            <View style={styles.projectBody}><Text style={styles.projectCategory}>{item.category}</Text><Text style={styles.projectTitle}>{item.title}</Text><Text style={styles.projectDescription}>{item.description}</Text><Text style={styles.projectNote}>{item.note}</Text></View>
          </View>)}
        </ScrollView>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#e9eaec' },
  content: { padding: 24, paddingBottom: 64, maxWidth: 900, alignSelf: 'center', width: '100%' },
  header: { flexDirection: 'row', alignItems: 'center', gap: 24, paddingVertical: 34, marginBottom: 18 },
  heroCopy: { flex: 1, minWidth: 0 },
  heroVisual: { width: 140, alignItems: 'center' },
  avatarFrame: { width: 116, height: 146, padding: 5, overflow: 'hidden', borderRadius: 60, borderWidth: 1, borderColor: '#c3c7cc', backgroundColor: '#d7d9dc' },
  avatarImage: { width: 106, height: 136, backgroundColor: '#d7d9dc', borderRadius: 54, transform: [{ scale: 1.35 }, { translateY: -8 }] },
  title: { fontSize: 14, lineHeight: 21, color: '#5f646b', fontWeight: '600', maxWidth: 430 },
  availabilityRow: { flexDirection: 'row', alignItems: 'center', marginTop: 13, gap: 7 },
  statusDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: '#8b9198' },
  availability: { fontSize: 11, color: '#656b72', fontWeight: '700' },
  section: { paddingTop: 18, marginTop: 26, marginBottom: 28 },
  sectionKicker: { color: '#777d85', fontSize: 10, letterSpacing: 1.5, fontWeight: '800', marginBottom: 8 },
  cardTitle: { fontSize: 23, lineHeight: 29, color: '#353a40', fontWeight: '800', marginBottom: 14, maxWidth: 620 },
  cardText: { fontSize: 15, color: '#5f646b', lineHeight: 24, maxWidth: 680 },
  detailGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 34, marginTop: 24, paddingTop: 10 },
  detailItem: { minWidth: 100 },
  detailLabel: { fontSize: 10, color: '#777d85', fontWeight: '800', marginBottom: 5 },
  detailValue: { color: '#4c5259', fontSize: 14, fontWeight: '700' },
  contactBlock: { marginTop: 24, paddingTop: 10 },
  phoneNumber: { color: '#626971', fontSize: 20, fontWeight: '800', letterSpacing: 0.5, marginTop: 4 },
  copyHint: { color: '#858b92', fontSize: 11, marginTop: 5 },
  timelineItem: { flexDirection: 'row', marginTop: 18, minHeight: 100, paddingLeft: 2 },
  timelineLine: { width: 3, backgroundColor: '#b2b7bd', marginRight: 16, marginVertical: 4, borderRadius: 2 },
  timelineContent: { flex: 1, paddingBottom: 16 },
  timelinePeriod: { color: '#777d85', fontSize: 10, fontWeight: '800', marginBottom: 6 },
  timelineTitle: { color: '#4a5057', fontSize: 17, fontWeight: '700', marginBottom: 6 },
  skillContainer: { flexDirection: 'row', flexWrap: 'wrap', columnGap: 20, rowGap: 12 },
  badge: { color: '#5e646b', paddingBottom: 6, borderBottomWidth: 1, borderBottomColor: '#b9bdc2', fontSize: 14, fontWeight: '700' },
  sectionHeader: { marginBottom: 22 },
  sectionTitle: { fontSize: 25, lineHeight: 31, color: '#353a40', fontWeight: '800' },
  projectList: { gap: 20, paddingRight: 24 },
  projectCard: { width: 290, overflow: 'hidden', marginBottom: 12, backgroundColor: '#f4f5f6', borderRadius: 12, padding: 12 },
  projectImage: { width: '100%', height: 190, backgroundColor: '#dfe1e4', borderRadius: 8 },
  projectBody: { paddingTop: 14 },
  projectCategory: { color: '#777d85', fontSize: 10, letterSpacing: 1.2, fontWeight: '800', marginBottom: 7 },
  projectTitle: { fontSize: 21, color: '#353a40', fontWeight: '800', marginBottom: 7 },
  projectDescription: { fontSize: 14, color: '#656b72', lineHeight: 21, marginBottom: 15 },
  projectNote: { fontSize: 13, color: '#777d85', lineHeight: 19, fontStyle: 'italic' },
});