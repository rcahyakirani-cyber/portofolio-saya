import { useState } from 'react';
import { Image, ImageSourcePropType, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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

type Tab = 'about' | 'experience' | 'skills' | 'portfolio';

const projects: Project[] = [
  { id: 1, title: 'Desain Aplikasi Instagram', category: 'UI/UX DESIGN', description: 'Eksplorasi desain antarmuka dan pengalaman pengguna aplikasi sosial media menggunakan Figma.', image: gambar1, aspectRatio: 635 / 707 },
  { id: 2, title: 'ReWear', category: 'MOBILE APP', description: 'Konsep aplikasi thrifting mobile dengan fokus pada alur belanja yang sederhana dan nyaman.', image: gambar2, aspectRatio: 364 / 651 },
  { id: 3, title: 'ReadEase', category: 'MOBILE APP', description: 'Aplikasi booking buku untuk memudahkan pengguna meminjam buku di perpustakaan.', image: gambar3, aspectRatio: 715 / 1600 },
  { id: 4, title: 'Flappy Bird', category: 'JAVASCRIPT', description: 'Game sederhana berbasis JavaScript dengan tantangan mengatur gerakan dan melewati rintangan.', image: gambar4, aspectRatio: 617 / 650 },
  { id: 5, title: 'MyQuran', category: 'REACT.JS', description: 'Website Al-Quran berbasis React.js untuk melihat daftar surah dan informasi ayat dengan tampilan yang bersih.', image: gambar5, aspectRatio: 1912 / 895 },
];

const tabs: { id: Tab; label: string; number: string }[] = [
  { id: 'about', label: 'Profil', number: '01' },
  { id: 'experience', label: 'Pengalaman', number: '02' },
  { id: 'skills', label: 'Keahlian', number: '03' },
  { id: 'portfolio', label: 'Proyek', number: '04' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('about');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.topLine} />
      <View style={styles.header}>
        <View style={styles.identityBlock}>
          <View style={styles.avatarFrame}>
            <Image source={fotoProfil} style={styles.avatarImage} resizeMode="cover" />
          </View>
          <View style={styles.headerCopy}>
            <Text style={styles.eyebrow}>PORTOFOLIO DIGITAL</Text>
            <Text style={styles.name}>Raisyah Cahya Kirani</Text>
            <Text style={styles.title}>Frontend Developer · UI/UX Designer</Text>
            <View style={styles.availabilityRow}><View style={styles.statusDot} /><Text style={styles.availability}>Pelajar SMK NEGRI 10 Jakarta</Text></View>
          </View>
        </View>
        <Text style={styles.intro}>Fokus membangun solusi digital yang fungsional dan mudah digunakan.</Text>
      </View>

      <View style={styles.navContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity key={tab.id} style={[styles.navButton, activeTab === tab.id && styles.navButtonActive]} onPress={() => setActiveTab(tab.id)} activeOpacity={0.8}>
            <Text style={[styles.navNumber, activeTab === tab.id && styles.navNumberActive]}>{tab.number}</Text>
            <Text style={[styles.navButtonText, activeTab === tab.id && styles.navButtonTextActive]}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {activeTab === 'about' && <View style={styles.card}>
        <Text style={styles.cardKicker}>01 / PROFIL SINGKAT</Text>
        <Text style={styles.cardTitle}>Siap belajar dan memberi kontribusi.</Text>
        <Text style={styles.cardText}>Saya Raisyah Cahya Kirani, pelajar yang memiliki minat pada pengembangan aplikasi mobile dan web, frontend, dan desain UI/UX. Saya senang mengubah ide menjadi tampilan yang terstruktur serta terus belajar melalui proyek nyata.</Text>
        <View style={styles.detailGrid}>
          <View style={styles.detailItem}><Text style={styles.detailLabel}>FOKUS</Text><Text style={styles.detailValue}>Mobile & Web</Text></View>
          <View style={styles.detailItem}><Text style={styles.detailLabel}>DOMISILI</Text><Text style={styles.detailValue}>Jakarta</Text></View>
          <View style={styles.detailItem}><Text style={styles.detailLabel}>STATUS</Text><Text style={styles.detailValue}>Pelajar</Text></View>
        </View>
        <View style={styles.contactBlock}>
          <Text style={styles.detailLabel}>KONTAK</Text>
          <Text style={styles.phoneNumber} selectable>+62 882-9157-2296</Text>
          <Text style={styles.copyHint}>Tekan lama nomor untuk menyalin</Text>
        </View>
      </View>}

      {activeTab === 'experience' && <View style={styles.card}>
        <Text style={styles.cardKicker}>02 / PENGALAMAN</Text>
        <Text style={styles.cardTitle}>Belajar melalui praktik.</Text>
        <View style={styles.timelineItem}><View style={styles.timelineLine} /><View style={styles.timelineContent}><Text style={styles.timelinePeriod}>PROYEK SEKOLAH & PERSONAL</Text><Text style={styles.timelineTitle}>Pengembangan aplikasi dan desain digital</Text><Text style={styles.cardText}>Merancang UI/UX di Figma, membuat aplikasi Android dengan Java/Kotlin, serta membangun proyek interaktif menggunakan JavaScript dan React Native/Expo dan Node.js.</Text></View></View>
        <View style={styles.timelineItem}><View style={styles.timelineLine} /><View style={styles.timelineContent}><Text style={styles.timelinePeriod}>TARGET PKL</Text><Text style={styles.timelineTitle}>Ruang kolaborasi untuk terus belajar dan berkembang</Text><Text style={styles.cardText}>Siap menerima arahan, bekerja kolaboratif, dan mengembangkan kebiasaan kerja yang teliti selama praktik kerja lapangan.</Text></View></View>
      </View>}

      {activeTab === 'skills' && <View style={styles.card}>
        <Text style={styles.cardKicker}>03 / KEAHLIAN</Text>
        <Text style={styles.cardTitle}>Tools yang sedang saya kembangkan.</Text>
        <View style={styles.skillContainer}>{['UI/UX Design', 'JavaScript', 'React Native', 'Kotlin', 'CSS', 'Git dasar', 'Problem Solving'].map((skill) => <Text key={skill} style={styles.badge}>{skill}</Text>)}</View>
      </View>}

      {activeTab === 'portfolio' && <View>
        <View style={styles.sectionHeader}><Text style={styles.cardKicker}>04 / KARYA TERPILIH</Text><Text style={styles.sectionTitle}>Proyek yang pernah dibuat.</Text></View>
        {projects.map((item) => <View key={item.id} style={styles.projectCard}>
          <Image source={item.image} style={[styles.projectImage, { aspectRatio: item.aspectRatio }]} resizeMode="contain" />
          <View style={styles.projectBody}><Text style={styles.projectCategory}>{item.category}</Text><Text style={styles.projectTitle}>{item.title}</Text><Text style={styles.projectDescription}>{item.description}</Text></View>
        </View>)}
      </View>}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#03070d' },
  content: { padding: 22, paddingBottom: 48, maxWidth: 720, alignSelf: 'center', width: '100%' },
  topLine: { height: 3, backgroundColor: '#3b9cff', width: 52, marginBottom: 28 },
  header: { marginBottom: 28 },
  identityBlock: { flexDirection: 'row', alignItems: 'center', gap: 18 },
  avatarFrame: { width: 106, height: 122, padding: 5, overflow: 'hidden', borderWidth: 1, borderColor: '#2d75b8', backgroundColor: '#071425' },
  avatarImage: { width: 96, height: 112, backgroundColor: '#0b1b30', transform: [{ scale: 1.35 }, { translateY: -8 }] },
  headerCopy: { flex: 1 },
  eyebrow: { fontSize: 10, letterSpacing: 2, color: '#58aaff', fontWeight: '700', marginBottom: 8 },
  name: { fontSize: 29, fontWeight: '800', color: '#f4f8ff', marginBottom: 5 },
  title: { fontSize: 13, color: '#a9bdd3', fontWeight: '600' },
  availabilityRow: { flexDirection: 'row', alignItems: 'center', marginTop: 13, gap: 7 },
  statusDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: '#4dc995' },
  availability: { fontSize: 9, letterSpacing: 1, color: '#72d7ae', fontWeight: '700' },
  intro: { color: '#8299b2', fontSize: 15, lineHeight: 23, marginTop: 22, maxWidth: 600 },
  navContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 20 },
  navButton: { flexDirection: 'row', alignItems: 'center', gap: 7, paddingVertical: 11, paddingHorizontal: 13, backgroundColor: '#08111e', borderWidth: 1, borderColor: '#15263a', flexGrow: 1 },
  navButtonActive: { backgroundColor: '#0b2a4a', borderColor: '#318bd2' },
  navNumber: { fontSize: 10, color: '#587089', fontWeight: '700' },
  navNumberActive: { color: '#67b8ff' },
  navButtonText: { color: '#91a7bd', fontWeight: '700', fontSize: 12 },
  navButtonTextActive: { color: '#edf7ff' },
  card: { backgroundColor: '#08111e', borderWidth: 1, borderColor: '#14283e', padding: 22, marginBottom: 16 },
  cardKicker: { color: '#55aaf5', fontSize: 10, letterSpacing: 1.6, fontWeight: '800', marginBottom: 12 },
  cardTitle: { fontSize: 22, lineHeight: 29, color: '#f1f6fc', fontWeight: '800', marginBottom: 12 },
  cardText: { fontSize: 14, color: '#9db0c4', lineHeight: 23 },
  detailGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 20, borderTopWidth: 1, borderTopColor: '#183049', marginTop: 22, paddingTop: 18 },
  detailItem: { minWidth: 100 },
  detailLabel: { fontSize: 9, color: '#55708b', letterSpacing: 1.2, fontWeight: '800', marginBottom: 5 },
  detailValue: { color: '#d8e9f8', fontSize: 13, fontWeight: '700' },
  contactBlock: { borderTopWidth: 1, borderTopColor: '#183049', marginTop: 22, paddingTop: 18 },
  phoneNumber: { color: '#72c2ff', fontSize: 20, fontWeight: '800', letterSpacing: 0.5, marginTop: 4 },
  copyHint: { color: '#6f89a3', fontSize: 11, marginTop: 5 },
  timelineItem: { flexDirection: 'row', marginTop: 7, minHeight: 100 },
  timelineLine: { width: 2, backgroundColor: '#2d8bd4', marginRight: 16, marginVertical: 4 },
  timelineContent: { flex: 1, paddingBottom: 16 },
  timelinePeriod: { color: '#55aaf5', fontSize: 9, letterSpacing: 1.3, fontWeight: '800', marginBottom: 6 },
  timelineTitle: { color: '#e9f3fc', fontSize: 16, fontWeight: '700', marginBottom: 6 },
  skillContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 9 },
  badge: { backgroundColor: '#0c2945', color: '#a8d7ff', paddingHorizontal: 13, paddingVertical: 8, borderWidth: 1, borderColor: '#1e5d91', fontSize: 12, fontWeight: '700' },
  sectionHeader: { marginBottom: 14 },
  sectionTitle: { fontSize: 22, color: '#f1f6fc', fontWeight: '800' },
  projectCard: { backgroundColor: '#08111e', borderWidth: 1, borderColor: '#14283e', overflow: 'hidden', marginBottom: 16 },
  projectImage: { width: '100%', backgroundColor: '#03070d' },
  projectBody: { padding: 18 },
  projectCategory: { color: '#55aaf5', fontSize: 9, letterSpacing: 1.4, fontWeight: '800', marginBottom: 7 },
  projectTitle: { fontSize: 19, color: '#eef6ff', fontWeight: '800', marginBottom: 7 },
  projectDescription: { fontSize: 14, color: '#9db0c4', lineHeight: 21, marginBottom: 15 },
});