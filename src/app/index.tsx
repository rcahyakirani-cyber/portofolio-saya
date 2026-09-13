import { useEffect, useRef } from 'react';
import { Animated, Image, ImageSourcePropType, Linking, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

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
  const pageMotion = useRef(new Animated.Value(0)).current;
  const statusPulse = useRef(new Animated.Value(1)).current;
  const scrollMotion = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(pageMotion, { toValue: 1, duration: 700, useNativeDriver: true }).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(statusPulse, { toValue: 0.45, duration: 1200, useNativeDriver: true }),
        Animated.timing(statusPulse, { toValue: 1, duration: 1200, useNativeDriver: true }),
      ])
    ).start();
  }, [pageMotion, statusPulse]);

  return (
    <Animated.ScrollView
      style={styles.container}
      contentContainerStyle={[styles.content, !isWideScreen && styles.contentSmall]}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollMotion } } }], { useNativeDriver: true })}>
      <Animated.View style={[styles.pageReveal, { opacity: pageMotion, transform: [{ translateY: pageMotion.interpolate({ inputRange: [0, 1], outputRange: [18, 0] }) }] }]}>
      <View style={[styles.heroSection, !isWideScreen && styles.heroSectionSmall]}>
      <View style={[styles.header, !isWideScreen && styles.headerSmall]}>
        <View style={[styles.heroCopy, !isWideScreen && styles.heroCopySmall]}>
          <Text style={styles.sectionKicker}>PORTFOLIO SAYA</Text>
          <Text style={[styles.name, !isWideScreen && styles.nameSmall]}>Raisyah Cahya Kirani</Text>
          <Text style={styles.title}>Pelajar SMK Negeri 10 Jakarta</Text>
          <Text style={styles.intro}>Saya sedang belajar membuat website, aplikasi, dan desain antarmuka. Ini beberapa hal yang pernah saya kerjakan di sekolah dan di waktu luang.</Text>
          <View style={styles.availabilityRow}><Animated.View style={[styles.statusDot, { opacity: statusPulse }]} /><Text style={styles.availability}>SEDANG BELAJAR</Text></View>
        </View>
        <View style={[styles.heroVisual, !isWideScreen && styles.heroVisualSmall]}>
          <Animated.View style={[styles.avatarFrame, { transform: [{ scale: pageMotion.interpolate({ inputRange: [0, 1], outputRange: [0.94, 1] }) }] }]}>
            <Image source={fotoProfil} style={styles.avatarImage} resizeMode="cover" />
          </Animated.View>
        </View>
      </View>
      </View>

      <Animated.View style={[styles.infoSection, !isWideScreen && styles.infoSectionSmall, { opacity: scrollMotion.interpolate({ inputRange: [120, 260], outputRange: [0.35, 1], extrapolate: 'clamp' }), transform: [{ translateY: scrollMotion.interpolate({ inputRange: [120, 260], outputRange: [28, 0], extrapolate: 'clamp' }) }] }]}>
      <View style={[styles.infoGrid, !isWideScreen && styles.infoGridSmall]}>
        <View style={styles.infoBlock}>
          <Text style={styles.sectionKicker}>PENDIDIKAN</Text>
          <Text style={styles.infoTitle}>SMK Negeri 10 Jakarta</Text>
          <Text style={styles.cardText}>Pelajar yang sedang memperdalam frontend, aplikasi mobile, dan desain UI/UX.</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.sectionKicker}>YANG SAYA KERJAKAN</Text>
          <Text style={styles.infoTitle}>Proyek sekolah dan personal</Text>
          <Text style={styles.cardText}>Mencoba membuat desain di Figma, aplikasi Android dengan Java/Kotlin, dan latihan web dengan JavaScript serta React Native.</Text>
        </View>
      </View>
      </Animated.View>

      <Animated.View style={[styles.section, styles.skillsSection, { opacity: scrollMotion.interpolate({ inputRange: [300, 460], outputRange: [0.35, 1], extrapolate: 'clamp' }), transform: [{ translateY: scrollMotion.interpolate({ inputRange: [300, 460], outputRange: [28, 0], extrapolate: 'clamp' }) }] }]}>
        <Text style={styles.sectionKicker}>KEAHLIAN</Text>
        <Text style={styles.cardTitle}>Hal yang sedang saya pelajari.</Text>
        <View style={styles.skillContainer}>{['UI/UX Design', 'JavaScript', 'React Native', 'Kotlin', 'CSS', 'Git dasar', 'Problem Solving'].map((skill) => <Text key={skill} style={styles.badge}>{skill}</Text>)}</View>
      </Animated.View>

      <Animated.View style={[styles.projectsSection, { opacity: scrollMotion.interpolate({ inputRange: [500, 680], outputRange: [0.35, 1], extrapolate: 'clamp' }), transform: [{ translateY: scrollMotion.interpolate({ inputRange: [500, 680], outputRange: [28, 0], extrapolate: 'clamp' }) }] }]}>
        <View style={styles.sectionHeader}><Text style={styles.sectionKicker}>KARYA PILIHAN</Text><Text style={styles.sectionTitle}>Proyek yang pernah saya coba.</Text></View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.projectList}>
          {projects.map((item) => <Pressable key={item.id} style={[styles.projectCard, isWideScreen && styles.projectCardWide]}>
            <Image source={item.image} style={[styles.projectImage, { aspectRatio: item.aspectRatio }]} resizeMode="contain" />
            <View style={styles.projectBody}><Text style={styles.projectCategory}>{item.category}</Text><Text style={styles.projectTitle}>{item.title}</Text><Text style={styles.projectDescription}>{item.description}</Text><Text style={styles.projectNote}>{item.note}</Text></View>
          </Pressable>)}
        </ScrollView>
      </Animated.View>

      <Animated.View style={[styles.contactSection, { opacity: scrollMotion.interpolate({ inputRange: [760, 920], outputRange: [0.35, 1], extrapolate: 'clamp' }), transform: [{ translateY: scrollMotion.interpolate({ inputRange: [760, 920], outputRange: [28, 0], extrapolate: 'clamp' }) }] }]}>
        <Text style={styles.sectionKicker}>KONTAK</Text>
        <Pressable onPress={() => Linking.openURL('https://wa.me/6288291572296')}>
          <Text style={styles.contactLink}>WhatsApp: 0882 9157 2296</Text>
        </Pressable>
        <Pressable onPress={() => Linking.openURL('https://github.com/rcahyakirani-cyber')}>
          <Text style={styles.contactLink}>GitHub: github.com/rcahyakirani-cyber</Text>
        </Pressable>
      </Animated.View>

      </Animated.View>

    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#071426' },
  content: { paddingBottom: 0, width: '100%' },
  contentSmall: { paddingBottom: 0 },
  pageReveal: { width: '100%' },
  heroSection: { backgroundColor: '#071426' },
  heroSectionSmall: { backgroundColor: '#071426' },
  header: { flexDirection: 'row', alignItems: 'center', gap: 46, paddingVertical: 76, paddingHorizontal: '10%', minHeight: 560 },
  headerSmall: { flexDirection: 'column-reverse', alignItems: 'stretch', gap: 26, paddingVertical: 46, paddingHorizontal: 24, minHeight: 0 },
  heroCopy: { flex: 1, minWidth: 0 },
  heroCopySmall: { width: '100%' },
  heroVisual: { width: 300, alignItems: 'center' },
  heroVisualSmall: { width: '100%', alignItems: 'center' },
  name: { fontFamily: 'Georgia', fontSize: 56, lineHeight: 62, color: '#ffffff', fontWeight: '700', marginBottom: 10, maxWidth: 700 },
  nameSmall: { fontSize: 38, lineHeight: 44 },
  intro: { color: '#d9e8f5', fontSize: 20, lineHeight: 30, maxWidth: 650, marginTop: 18 },
  avatarFrame: { width: 260, height: 330, padding: 8, overflow: 'hidden', borderRadius: 132, borderWidth: 2, borderColor: '#4a91c7', backgroundColor: '#163052' },
  avatarImage: { width: 244, height: 314, backgroundColor: '#163052', borderRadius: 124, transform: [{ scale: 1.35 }, { translateY: -8 }] },
  title: { fontSize: 21, lineHeight: 30, color: '#d9e8f5', fontWeight: '600', maxWidth: 560 },
  availabilityRow: { flexDirection: 'row', alignItems: 'center', marginTop: 13, gap: 7 },
  statusDot: { width: 9, height: 9, borderRadius: 5, backgroundColor: '#6db5e8' },
  availability: { fontSize: 14, color: '#a9d3f0', fontWeight: '700' },
  infoSection: { backgroundColor: '#0d2745', paddingVertical: 54, paddingHorizontal: '10%' },
  infoSectionSmall: { paddingVertical: 36, paddingHorizontal: 24 },
  infoGrid: { flexDirection: 'row', gap: 54 },
  infoGridSmall: { flexDirection: 'column', gap: 28 },
  infoBlock: { flex: 1 },
  infoTitle: { fontFamily: 'Georgia', color: '#f4f8fc', fontSize: 23, fontWeight: '700', marginBottom: 10 },
  section: { paddingVertical: 62, paddingHorizontal: '10%', marginTop: 0, marginBottom: 0, backgroundColor: '#071426' },
  skillsSection: { backgroundColor: '#071426' },
  sectionKicker: { color: '#73b9e8', fontSize: 13, letterSpacing: 1.6, fontWeight: '800', marginBottom: 11 },
  cardTitle: { fontFamily: 'Georgia', fontSize: 31, lineHeight: 38, color: '#f4f8fc', fontWeight: '700', marginBottom: 17, maxWidth: 760 },
  cardText: { fontFamily: 'Arial', fontSize: 17, color: '#d9e8f5', lineHeight: 28, maxWidth: 760 },
  detailGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 34, marginTop: 24, paddingTop: 10 },
  detailItem: { minWidth: 100 },
  detailLabel: { fontSize: 12, color: '#8fc4e8', fontWeight: '800', marginBottom: 6 },
  detailValue: { color: '#f1f7fc', fontSize: 16, fontWeight: '700' },
  contactBlock: { marginTop: 24, paddingTop: 10 },
  phoneNumber: { color: '#91c9ee', fontSize: 23, fontWeight: '800', letterSpacing: 0.5, marginTop: 4 },
  copyHint: { color: '#9bbbd2', fontSize: 12, marginTop: 6 },
  timelineItem: { flexDirection: 'row', marginTop: 18, minHeight: 100, paddingLeft: 2 },
  timelineLine: { width: 3, backgroundColor: '#4a91c7', marginRight: 16, marginVertical: 4, borderRadius: 2 },
  timelineContent: { flex: 1, paddingBottom: 16 },
  timelinePeriod: { color: '#73b9e8', fontSize: 13, fontWeight: '800', marginBottom: 7 },
  timelineTitle: { color: '#f4f8fc', fontSize: 21, lineHeight: 27, fontWeight: '700', marginBottom: 7 },
  skillContainer: { flexDirection: 'row', flexWrap: 'wrap', columnGap: 20, rowGap: 12 },
  badge: { color: '#b9ddf4', paddingBottom: 7, borderBottomWidth: 1, borderBottomColor: '#4a91c7', fontSize: 17, fontWeight: '700' },
  projectsSection: { backgroundColor: '#0d2745', paddingVertical: 62, paddingHorizontal: '10%' },
  sectionHeader: { marginBottom: 26 },
  sectionTitle: { fontFamily: 'Georgia', fontSize: 32, lineHeight: 39, color: '#f4f8fc', fontWeight: '700' },
  projectList: { gap: 26, paddingRight: 24 },
  projectCard: { width: 330, overflow: 'hidden', marginBottom: 12, backgroundColor: '#153557', borderRadius: 10, padding: 16 },
  projectCardWide: { width: 430 },
  projectImage: { width: '100%', height: 270, backgroundColor: '#102942', borderRadius: 6 },
  projectBody: { paddingTop: 16 },
  projectCategory: { color: '#8fc4e8', fontSize: 13, letterSpacing: 1, fontWeight: '800', marginBottom: 9 },
  projectTitle: { fontFamily: 'Georgia', fontSize: 26, lineHeight: 32, color: '#f4f8fc', fontWeight: '700', marginBottom: 9 },
  projectDescription: { fontFamily: 'Arial', fontSize: 17, color: '#d9e8f5', lineHeight: 26, marginBottom: 16 },
  projectNote: { fontSize: 15, color: '#a9c7dc', lineHeight: 22, fontStyle: 'italic' },
  contactSection: { backgroundColor: '#071426', paddingVertical: 68, paddingHorizontal: '10%' },
  contactTitle: { color: '#f4f8fc', fontSize: 32, lineHeight: 39, fontWeight: '800', marginBottom: 12 },
  contactText: { color: '#d9e8f5', fontSize: 17, lineHeight: 26, maxWidth: 620, marginBottom: 14 },
  contactLink: { color: '#8fc4e8', fontSize: 18, lineHeight: 31, fontWeight: '700' },
});