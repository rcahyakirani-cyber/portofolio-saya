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

const tabs: { id: Tab; label: string }[] = [
  { id: 'about', label: 'Profil' },
  { id: 'experience', label: 'Pengalaman' },
  { id: 'skills', label: 'Keahlian' },
  { id: 'portfolio', label: 'Proyek' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('about');

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

      <View style={styles.navContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity key={tab.id} style={[styles.navButton, activeTab === tab.id && styles.navButtonActive]} onPress={() => setActiveTab(tab.id)} activeOpacity={0.8}>
            <Text style={[styles.navButtonText, activeTab === tab.id && styles.navButtonTextActive]}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {activeTab === 'about' && <View style={styles.card}>
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
      </View>}

      {activeTab === 'experience' && <View style={styles.card}>
        <Text style={styles.cardTitle}>Pengalaman</Text>
        <View style={styles.timelineItem}><View style={styles.timelineLine} /><View style={styles.timelineContent}><Text style={styles.timelinePeriod}>PROYEK SEKOLAH & PERSONAL</Text><Text style={styles.timelineTitle}>Pengembangan aplikasi dan desain digital</Text><Text style={styles.cardText}>Merancang UI/UX di Figma, membuat aplikasi Android dengan Java/Kotlin, serta membangun proyek interaktif menggunakan JavaScript dan React Native/Expo dan Node.js.</Text></View></View>
        <View style={styles.timelineItem}><View style={styles.timelineLine} /><View style={styles.timelineContent}><Text style={styles.timelinePeriod}>TARGET PKL</Text><Text style={styles.timelineTitle}>Ruang kolaborasi untuk terus belajar dan berkembang</Text><Text style={styles.cardText}>Siap menerima arahan, bekerja kolaboratif, dan mengembangkan kebiasaan kerja yang teliti selama praktik kerja lapangan.</Text></View></View>
      </View>}

      {activeTab === 'skills' && <View style={styles.card}>
        <Text style={styles.cardTitle}>Keahlian</Text>
        <View style={styles.skillContainer}>{['UI/UX Design', 'JavaScript', 'React Native', 'Kotlin', 'CSS', 'Git dasar', 'Problem Solving'].map((skill) => <Text key={skill} style={styles.badge}>{skill}</Text>)}</View>
      </View>}

      {activeTab === 'portfolio' && <View>
        <View style={styles.sectionHeader}><Text style={styles.sectionTitle}>Proyek yang pernah dibuat</Text></View>
        {projects.map((item) => <View key={item.id} style={styles.projectCard}>
          <Image source={item.image} style={[styles.projectImage, { aspectRatio: item.aspectRatio }]} resizeMode="contain" />
          <View style={styles.projectBody}><Text style={styles.projectCategory}>{item.category}</Text><Text style={styles.projectTitle}>{item.title}</Text><Text style={styles.projectDescription}>{item.description}</Text></View>
        </View>)}
      </View>}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f7fa' },
  content: { padding: 22, paddingBottom: 48, maxWidth: 720, alignSelf: 'center', width: '100%' },
  header: { marginBottom: 28 },
  identityBlock: { flexDirection: 'row', alignItems: 'center', gap: 18 },
  avatarFrame: { width: 106, height: 122, padding: 5, overflow: 'hidden', borderWidth: 1, borderColor: '#c9d4df', backgroundColor: '#e9eef3' },
  avatarImage: { width: 96, height: 112, backgroundColor: '#e9eef3', transform: [{ scale: 1.35 }, { translateY: -8 }] },
  headerCopy: { flex: 1 },
  name: { fontSize: 29, fontWeight: '800', color: '#172333', marginBottom: 5 },
  title: { fontSize: 13, color: '#5f7183', fontWeight: '600' },
  availabilityRow: { flexDirection: 'row', alignItems: 'center', marginTop: 13, gap: 7 },
  statusDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: '#4dc995' },
  availability: { fontSize: 10, color: '#43745e', fontWeight: '700' },
  intro: { color: '#667788', fontSize: 15, lineHeight: 23, marginTop: 22, maxWidth: 600 },
  navContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 20 },
  navButton: { alignItems: 'center', paddingVertical: 11, paddingHorizontal: 13, backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#d7e0e8', flexGrow: 1, minWidth: 120 },
  navButtonActive: { backgroundColor: '#e4f0fb', borderColor: '#82b5df' },
  navButtonText: { color: '#647587', fontWeight: '700', fontSize: 12 },
  navButtonTextActive: { color: '#1f5f91' },
  card: { backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#dce4eb', padding: 22, marginBottom: 16 },
  cardTitle: { fontSize: 22, lineHeight: 29, color: '#172333', fontWeight: '800', marginBottom: 12 },
  cardText: { fontSize: 14, color: '#617386', lineHeight: 23 },
  detailGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 20, borderTopWidth: 1, borderTopColor: '#e1e8ee', marginTop: 22, paddingTop: 18 },
  detailItem: { minWidth: 100 },
  detailLabel: { fontSize: 10, color: '#718294', fontWeight: '800', marginBottom: 5 },
  detailValue: { color: '#27394b', fontSize: 13, fontWeight: '700' },
  contactBlock: { borderTopWidth: 1, borderTopColor: '#e1e8ee', marginTop: 22, paddingTop: 18 },
  phoneNumber: { color: '#2473ad', fontSize: 20, fontWeight: '800', letterSpacing: 0.5, marginTop: 4 },
  copyHint: { color: '#8291a0', fontSize: 11, marginTop: 5 },
  timelineItem: { flexDirection: 'row', marginTop: 7, minHeight: 100 },
  timelineLine: { width: 2, backgroundColor: '#83b6d8', marginRight: 16, marginVertical: 4 },
  timelineContent: { flex: 1, paddingBottom: 16 },
  timelinePeriod: { color: '#5c83a1', fontSize: 10, fontWeight: '800', marginBottom: 6 },
  timelineTitle: { color: '#27394b', fontSize: 16, fontWeight: '700', marginBottom: 6 },
  skillContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 9 },
  badge: { backgroundColor: '#0c2945', color: '#a8d7ff', paddingHorizontal: 13, paddingVertical: 8, borderWidth: 1, borderColor: '#1e5d91', fontSize: 12, fontWeight: '700' },
  sectionHeader: { marginBottom: 14 },
  sectionTitle: { fontSize: 22, color: '#172333', fontWeight: '800' },
  projectCard: { backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#dce4eb', overflow: 'hidden', marginBottom: 16 },
  projectImage: { width: '100%', backgroundColor: '#eef2f5' },
  projectBody: { padding: 18 },
  projectCategory: { color: '#5c83a1', fontSize: 10, fontWeight: '800', marginBottom: 7 },
  projectTitle: { fontSize: 19, color: '#172333', fontWeight: '800', marginBottom: 7 },
  projectDescription: { fontSize: 14, color: '#617386', lineHeight: 21, marginBottom: 15 },
});