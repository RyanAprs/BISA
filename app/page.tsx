"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Target,
  Heart,
  Award,
  ArrowRight,
  CheckCircle,
  Globe,
  Smartphone,
  Monitor,
  Headphones,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import logo from "@/public/logo.png";
import Image from "next/image";

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#eeebe3]">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <Image src={logo} alt="logo" />{" "}
              </div>
              <span className="text-xl sm:text-2xl font-bold text-gray-900">
                BISA
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#about"
                className="text-gray-700 hover:text-[#2a61e7] transition-colors"
              >
                About
              </Link>
              <Link
                href="#product"
                className="text-gray-700 hover:text-[#2a61e7] transition-colors"
              >
                Product
              </Link>
              <Link
                href="#services"
                className="text-gray-700 hover:text-[#2a61e7] transition-colors"
              >
                Services
              </Link>
              <Link
                href="#team"
                className="text-gray-700 hover:text-[#2a61e7] transition-colors"
              >
                Team
              </Link>
              <Button className="bg-[#2a61e7] hover:bg-[#1e4bb8] text-white">
                Get Started
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-4">
                <Link
                  href="#about"
                  className="text-gray-700 hover:text-[#2a61e7] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#product"
                  className="text-gray-700 hover:text-[#2a61e7] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Product
                </Link>
                <Link
                  href="#services"
                  className="text-gray-700 hover:text-[#2a61e7] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="#team"
                  className="text-gray-700 hover:text-[#2a61e7] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Team
                </Link>
                <Button className="bg-[#2a61e7] hover:bg-[#1e4bb8] text-white w-full">
                  Get Started
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center relative px-4 sm:px-6"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-[#eeebe3]/80"></div>

        <div className="absolute top-4 sm:top-8 left-4 sm:left-8 text-[#2a61e7] font-bold text-xs sm:text-sm uppercase tracking-wide z-10">
          MEMBUKA PELUANG,
          <br />
          MENGHAPUS BATASAN
        </div>

        <div className="text-center max-w-4xl mx-auto relative z-10">
          <h1 className="text-[4rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-[#2a61e7] leading-none mb-6 sm:mb-8 tracking-tight">
            BISA
          </h1>
          <div className="flex items-center justify-center space-x-4 sm:space-x-8 mb-8 sm:mb-12">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#2a61e7] rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#2a61e7] rounded-full flex items-center justify-center">
              <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#2a61e7] rounded-full flex items-center justify-center">
              <Target className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
          </div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto px-4">
            Platform pencari kerja inklusif yang menghubungkan talenta luar
            biasa dengan peluang karir yang bermakna
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center relative bg-white px-4 sm:px-6"
      >
        <div className="absolute top-4 sm:top-8 left-4 sm:left-8 text-[#2a61e7] font-bold text-xs sm:text-sm uppercase tracking-wide">
          MEMBUKA PELUANG,
          <br />
          MENGHAPUS BATASAN
        </div>

        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-[#2a61e7] leading-none mb-6 sm:mb-8">
                WHO WE
                <br />
                ARE
              </h2>
            </div>
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div className="bg-[#eeebe3] p-6 sm:p-8 rounded-2xl">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <strong>Bisa</strong> adalah platform pencari kerja inklusif
                  yang didedikasikan untuk penyandang disabilitas. Kami
                  menghubungkan talenta luar biasa dengan perusahaan-perusahaan
                  yang percaya bahwa keberagaman bukan sekadar
                  kebijakan—melainkan kekuatan.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <Card className="border-0 shadow-lg bg-[#2a61e7] text-white">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="text-lg sm:text-2xl font-bold mb-2">
                      VISION:
                    </div>
                    <p className="text-xs sm:text-sm">
                      MENJADI PLATFORM TERDEPAN DALAM MENCIPTAKAN EKOSISTEM
                      KERJA INKLUSIF DI INDONESIA YANG MEMBERI INDIVIDU MEMILIKI
                      KESEMPATAN YANG SAMA UNTUK MENGEMBANGKAN KARIER TANPA
                      MEMANDANG KETERBATASAN FISIK.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="text-lg sm:text-2xl font-bold mb-2 text-[#2a61e7]">
                      MISSION:
                    </div>
                    <ul className="text-xs sm:text-sm text-left space-y-1 text-[#2a61e7]">
                      <li>
                        • MEMFASILITASI AKSES PEKERJAAN BERKUALITAS BAGI
                        PENYANDANG DISABILITAS
                      </li>
                      <li>
                        • MENDUKUNG PERUSAHAAN DALAM MENGEMBANGKAN LINGKUNGAN
                        KERJA YANG INKLUSIF
                      </li>
                      <li>
                        • MEMBERIKAN PELATIHAN DAN PENGEMBANGAN KETERAMPILAN
                      </li>
                      <li>
                        • MENGEDUKASI MASYARAKAT TENTANG POTENSI DAN KEMAMPUAN
                        PARA PENYANDANG DISABILITAS
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Product Section */}
      <section
        id="product"
        className="min-h-screen flex items-center justify-center relative px-4 sm:px-6"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-[#eeebe3]/80"></div>

        <div className="absolute top-4 sm:top-8 right-4 sm:right-8 text-[#2a61e7] font-bold text-xs sm:text-sm uppercase tracking-wide z-10">
          MEMBUKA PELUANG,
          <br />
          MENGHAPUS BATASAN
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-[#2a61e7] leading-none mb-6 sm:mb-8">
                OUR
                <br />
                PRODUCT
              </h2>
            </div>
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <p className="text-base sm:text-lg text-[#2a61e7] leading-relaxed">
                  Di era digital yang terus berkembang, dunia kerja menuntut
                  akses yang lebih inklusif. Aplikasi <strong>BISA</strong>{" "}
                  hadir sebagai solusi inovatif bagi para penyandang disabilitas
                  untuk menemukan peluang kerja yang sesuai. Dengan menganalisis
                  kebutuhan pasar dan memanfaatkan teknologi terkini, kami
                  merancang pengalaman yang ramah pengguna dan memberdayakan.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <Smartphone className="h-10 w-10 sm:h-12 sm:w-12 text-[#2a61e7] mx-auto mb-3 sm:mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
                      Mobile App
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Aplikasi mobile yang accessible dan user-friendly
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <Monitor className="h-10 w-10 sm:h-12 sm:w-12 text-[#2a61e7] mx-auto mb-3 sm:mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
                      Web Platform
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Platform web dengan fitur lengkap untuk pencarian kerja
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <Headphones className="h-10 w-10 sm:h-12 sm:w-12 text-[#2a61e7] mx-auto mb-3 sm:mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
                      Support System
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Sistem dukungan 24/7 untuk semua pengguna
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Offer Section */}
      <section
        id="services"
        className="min-h-screen flex items-center justify-center relative bg-white px-4 sm:px-6"
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#2a61e7] leading-none mb-6 sm:mb-8">
                SERVICES
                <br />
                WE OFFER
              </h2>
              <div className="bg-[#eeebe3] p-4 sm:p-6 rounded-2xl">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <strong>BISA</strong> menyediakan layanan end-to-end yang
                  mendukung proses perekrutan inklusif, dari sisi pencari kerja
                  disabilitas maupun perusahaan mitra.
                </p>
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div className="bg-[#2a61e7] p-4 sm:p-6 rounded-2xl">
                <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">
                  OUR EXPERTISE INCLUDES
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="bg-white/20 p-2 sm:p-3 rounded-lg">
                    <p className="text-white font-medium text-sm sm:text-base">
                      REKRUTMEN & TALENT MATCHING
                    </p>
                  </div>
                  <div className="bg-white/20 p-2 sm:p-3 rounded-lg">
                    <p className="text-white font-medium text-sm sm:text-base">
                      WORKPLACE ACCESSIBILITY SOLUTIONS
                    </p>
                  </div>
                  <div className="bg-white/20 p-2 sm:p-3 rounded-lg">
                    <p className="text-white font-medium text-sm sm:text-base">
                      TRAINING & DEVELOPMENT
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-3 sm:p-4">
                    <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-[#2a61e7] mb-2" />
                    <h4 className="font-bold text-xs sm:text-sm mb-1">
                      Career Counseling
                    </h4>
                    <p className="text-xs text-gray-600">
                      Konseling karir personal
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-3 sm:p-4">
                    <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-[#2a61e7] mb-2" />
                    <h4 className="font-bold text-xs sm:text-sm mb-1">
                      Skills Assessment
                    </h4>
                    <p className="text-xs text-gray-600">Penilaian kemampuan</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-3 sm:p-4">
                    <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-[#2a61e7] mb-2" />
                    <h4 className="font-bold text-xs sm:text-sm mb-1">
                      Job Matching
                    </h4>
                    <p className="text-xs text-gray-600">
                      Pencocokan pekerjaan
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-3 sm:p-4">
                    <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-[#2a61e7] mb-2" />
                    <h4 className="font-bold text-xs sm:text-sm mb-1">
                      Follow-up Support
                    </h4>
                    <p className="text-xs text-gray-600">
                      Dukungan berkelanjutan
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose BISA Section */}
      <section
        className="min-h-screen flex items-center justify-center relative px-4 sm:px-6"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-[#eeebe3]/80"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#2a61e7] rounded-full flex items-center justify-center mx-auto lg:mx-0">
                <Award className="h-12 w-12 sm:h-16 sm:w-16 text-white" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-4 sm:p-6">
                    <h4 className="font-bold text-[#2a61e7] mb-2 text-sm sm:text-base">
                      Inklusif & Adaptif
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Kami mengerti bahwa kebutuhan setiap penyandang
                      disabilitas berbeda. Platform kami mendukung berbagai
                      jenis disabilitas dengan pendekatan human-centered.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-4 sm:p-6">
                    <h4 className="font-bold text-[#2a61e7] mb-2 text-sm sm:text-base">
                      Jembatan antara dunia kerja dan komunitas disabilitas
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Kami menjembatani kesenjangan akses kerja dengan
                      menyediakan sistem rekrutmen yang adil dan aksesibel.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-4 sm:p-6">
                    <h4 className="font-bold text-[#2a61e7] mb-2 text-sm sm:text-base">
                      Didukung oleh Perusahaan Inklusif
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Kami bekerja sama dengan perusahaan yang berkomitmen
                      terhadap keberagaman dan tanggung jawab sosial.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-4 sm:p-6">
                    <h4 className="font-bold text-[#2a61e7] mb-2 text-sm sm:text-base">
                      Dibangun dengan Teknologi Cerdas
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Dengan teknologi kecerdasan buatan dan analisis data, kami
                      memberikan hasil pencocokan yang akurat dan efisien.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#2a61e7] leading-none mb-6 sm:mb-8">
                WHY BISA?
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section
        id="team"
        className="min-h-screen flex items-center justify-center relative bg-white px-4 sm:px-6"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-[#2a61e7] leading-none mb-8 sm:mb-12">
            OUR TEAM
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8 sm:mb-12">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#2a61e7] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Smartphone className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h4 className="font-bold text-[#2a61e7] text-sm sm:text-lg">
                UI/UX
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 text-center">
                Ferry Kurniawan
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#2a61e7] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Monitor className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h4 className="font-bold text-[#2a61e7] text-sm sm:text-lg">
                FRONTEND
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 text-center">
                Irsyad Muhamad
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#2a61e7] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h4 className="font-bold text-[#2a61e7] text-sm sm:text-lg">
                BACKEND
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 text-center">
                Ryan Adi Prasetyo
              </p>
            </div>
          </div>

          <div className="bg-[#eeebe3] p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Our team of marketing professionals combines experience and
              passion to deliver results. From strategists to designers, every
              team member brings unique skills to the table.
            </p>
          </div>
        </div>
      </section>

      {/* What's Next Section */}
      <section
        className="min-h-screen flex items-center justify-center relative px-4 sm:px-6"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-[#eeebe3]/80"></div>

        <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-[#2a61e7] font-bold text-xs sm:text-sm uppercase tracking-wide z-10">
          MEMBUKA PELUANG, MENGHAPUS
          <br />
          BATASAN
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#2a61e7] leading-none mb-6 sm:mb-8">
                WHAT'S
                <br />
                NEXT FOR
                <br />
                BISA
                <br />
                GROUP
              </h2>
            </div>
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <p className="text-base sm:text-lg text-[#2a61e7] leading-relaxed">
                  SAAT <strong>KAMI</strong> MELIHAT KE MASA DEPAN,{" "}
                  <strong>BISA</strong> BERKOMITMEN UNTUK TERUS MEMPERLUAS
                  DAMPAK <strong>INKLUSIF</strong> DENGAN INOVASI TEKNOLOGI,
                  KOLABORASI STRATEGIS, DAN{" "}
                  <strong>PEMBERDAYAAN KOMUNITAS DISABILITAS</strong> DI SELURUH
                  INDONESIA.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <Card className="border-0 shadow-lg bg-[#2a61e7] text-white">
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-xs sm:text-sm font-bold mb-2">
                      2024 Q4
                    </div>
                    <h4 className="font-bold mb-2 text-sm sm:text-base">
                      AI Matching System
                    </h4>
                    <p className="text-xs sm:text-sm">
                      Implementasi sistem AI untuk pencocokan kerja yang lebih
                      akurat
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-xs sm:text-sm font-bold mb-2 text-[#2a61e7]">
                      2025 Q1
                    </div>
                    <h4 className="font-bold mb-2 text-[#2a61e7] text-sm sm:text-base">
                      Mobile App Launch
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Peluncuran aplikasi mobile yang fully accessible
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-xs sm:text-sm font-bold mb-2 text-[#2a61e7]">
                      2025 Q2
                    </div>
                    <h4 className="font-bold mb-2 text-[#2a61e7] text-sm sm:text-base">
                      Regional Expansion
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Ekspansi ke kota-kota besar di Indonesia
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-[#2a61e7] text-white">
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-xs sm:text-sm font-bold mb-2">
                      2025 Q3
                    </div>
                    <h4 className="font-bold mb-2 text-sm sm:text-base">
                      Training Platform
                    </h4>
                    <p className="text-xs sm:text-sm">
                      Platform pelatihan online untuk skill development
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-[#2a61e7]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Siap Bergabung dengan BISA?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-12 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan pencari kerja dan perusahaan yang sudah
              menjadi bagian dari komunitas BISA. Bersama, kita ciptakan peluang
              yang bermakna.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#2a61e7] hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
              >
                Cari Peluang Kerja
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#2a61e7] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent"
              >
                Untuk Perusahaan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                <div className="w-8 h-8  rounded-full flex items-center justify-center">
                  <Image src={logo} alt="logo" />{" "}
                </div>
                <span className="text-xl sm:text-2xl font-bold">BISA</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Membuka peluang, menghapus batasan. Membangun masa depan yang
                inklusif untuk semua.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
                Platform
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cari Kerja
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pasang Lowongan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Program Pelatihan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Sumber Daya
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
                Perusahaan
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Tim Kami
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Karir
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Kontak
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
                Dukungan
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pusat Bantuan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Aksesibilitas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Kebijakan Privasi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Syarat Layanan
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>
              &copy; {new Date().getFullYear()} BISA Group. Hak cipta dilindungi
              undang-undang.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
