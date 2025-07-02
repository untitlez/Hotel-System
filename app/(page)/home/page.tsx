"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("Residence in Yogyakarta");
  const [priceRange, setPriceRange] = useState([1000, 500000]);
  const [selectedType, setSelectedType] = useState("Residence");
  const [selectedLocation, setSelectedLocation] = useState("Indonesia");
  const [favoriteProperties, setFavoriteProperties] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    if (favoriteProperties.includes(id)) {
      setFavoriteProperties(
        favoriteProperties.filter((propId) => propId !== id)
      );
    } else {
      setFavoriteProperties([...favoriteProperties, id]);
    }
  };

  const properties = [
    {
      id: 1,
      name: "Serenity Heights Villas",
      price: 250000,
      location: "Bogor, Tengah",
      bedrooms: 8,
      bathrooms: 2.5,
      area: 410,
      image:
        "https://readdy.ai/api/search-image?query=Modern%20luxury%20villa%20with%20wooden%20facade%20and%20large%20glass%20windows%2C%20featuring%20a%20minimalist%20design%20with%20clean%20lines%2C%20surrounded%20by%20lush%20greenery%20and%20with%20a%20swimming%20pool%2C%20sunset%20lighting%2C%20architectural%20photography%2C%20ultra%20high%20definition&width=600&height=400&seq=1&orientation=landscape",
    },
    {
      id: 2,
      name: "Emerald Bay Residences",
      price: 250000,
      location: "Gunungkidul, Yogyakarta",
      bedrooms: 8,
      bathrooms: 2.5,
      area: 410,
      image:
        "https://readdy.ai/api/search-image?query=Contemporary%20modular%20wooden%20homes%20in%20a%20row%2C%20modern%20architectural%20design%20with%20natural%20wood%20facades%20and%20large%20windows%2C%20surrounded%20by%20green%20landscape%2C%20daytime%20lighting%2C%20professional%20real%20estate%20photography&width=600&height=400&seq=2&orientation=landscape",
    },
    {
      id: 3,
      name: "Palm Grove Estate",
      price: 250000,
      location: "Semarang, Selatan",
      bedrooms: 8,
      bathrooms: 2.5,
      area: 410,
      image:
        "https://readdy.ai/api/search-image?query=Modern%20minimalist%20villa%20with%20flat%20roof%20and%20wooden%20elements%2C%20large%20glass%20windows%2C%20outdoor%20terrace%20with%20furniture%2C%20autumn%20trees%20in%20background%2C%20situated%20on%20rocky%20terrain%2C%20professional%20architectural%20photography&width=600&height=400&seq=3&orientation=landscape",
    },
    {
      id: 4,
      name: "Golden Horizon Residences",
      price: 250000,
      location: "Malang, Barat",
      bedrooms: 8,
      bathrooms: 2.5,
      area: 410,
      image:
        "https://readdy.ai/api/search-image?query=Row%20of%20modern%20wooden%20cabin-style%20houses%20with%20triangular%20roofs%2C%20contemporary%20architectural%20design%2C%20clean%20lines%2C%20large%20windows%2C%20wooden%20facades%2C%20arranged%20in%20sequence%2C%20professional%20real%20estate%20photography&width=600&height=400&seq=4&orientation=landscape",
    },
    {
      id: 5,
      name: "Sapphire Riverfront Villas",
      price: 250000,
      location: "Jakarta, Selatan",
      bedrooms: 8,
      bathrooms: 2.5,
      area: 410,
      image:
        "https://readdy.ai/api/search-image?query=Row%20of%20modern%20townhouses%20with%20flat%20roofs%20and%20wooden%20accents%2C%20contemporary%20design%20with%20large%20windows%20and%20balconies%2C%20clean%20architectural%20lines%2C%20professional%20real%20estate%20photography%20in%20daylight&width=600&height=400&seq=5&orientation=landscape",
    },
    {
      id: 6,
      name: "Sunset Cliffside Homes",
      price: 250000,
      location: "Surabaya, Timur",
      bedrooms: 8,
      bathrooms: 2.5,
      area: 410,
      image:
        "https://readdy.ai/api/search-image?query=Luxury%20beachfront%20villa%20with%20wooden%20deck%2C%20outdoor%20furniture%2C%20ocean%20view%2C%20modern%20architectural%20design%20with%20large%20windows%20and%20wooden%20elements%2C%20sunset%20lighting%2C%20professional%20real%20estate%20photography&width=600&height=400&seq=6&orientation=landscape",
    },
  ];

  const heroImage =
    "https://readdy.ai/api/search-image?query=Stunning%20modern%20luxury%20villa%20with%20large%20glass%20windows%20and%20wooden%20elements%2C%20infinity%20pool%20overlooking%20natural%20landscape%2C%20architectural%20masterpiece%20with%20clean%20lines%20and%20open%20concept%20design%2C%20professional%20twilight%20photography%20with%20perfect%20gradient%20lighting%2C%20dramatic%20sky%20with%20soft%20clouds%2C%20ultra%20high%20definition&width=1440&height=600&seq=7&orientation=landscape";

  const faqImage =
    "https://readdy.ai/api/search-image?query=Modern%20minimalist%20architectural%20logo%20or%20symbol%20with%20clean%20lines%20and%20geometric%20shapes%2C%20representing%20luxury%20real%20estate%2C%20professional%20branding%20design%20with%20elegant%20typography%2C%20neutral%20background%20with%20subtle%20texture%2C%20high%20contrast%20lighting%2C%20professional%20product%20photography&width=800&height=600&seq=8&orientation=landscape";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <a href="#" className="flex items-center">
              <i className="fas fa-home text-2xl mr-2 text-blue-600"></i>
              <span className="text-xl font-bold">Aruna</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-black font-medium hover:text-blue-600 transition-colors cursor-pointer"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Properties
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Our Projects
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 transition-colors cursor-pointer"
            >
              FAQs
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 transition-colors cursor-pointer"
            >
              About Us
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors hidden md:block cursor-pointer"
            >
              Contact Us
            </a>
            <Button
              variant="outline"
              className="!rounded-button whitespace-nowrap cursor-pointer border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Book a Call
            </Button>
          </div>
        </div>
      </header>

      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2.5 px-4 text-center text-sm font-medium">
        Lock in Your New Home with Flexible Payment Plans and Special Discounts!{" "}
        <a href="#" className="underline ml-1 font-semibold cursor-pointer">
          Learn More
        </a>
      </div>

      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Find Your Dream Home in Indonesia
            </h1>
            <p className="text-lg mb-8 text-gray-100 leading-relaxed">
              Discover premium properties with exceptional design and
              unparalleled comfort across Indonesia's most desirable locations.
            </p>
            <div className="flex space-x-4">
              <Button className="!rounded-button whitespace-nowrap cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-6">
                Explore Properties
              </Button>
              <Button
                variant="outline"
                className="!rounded-button whitespace-nowrap cursor-pointer border-white text-white hover:bg-white/10 px-6 py-6"
              >
                Contact an Agent
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-24 relative z-20 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div>
              <p className="text-sm font-medium mb-2 text-gray-700">
                Looking For
              </p>
              <Input
                placeholder="Residence in Yogyakarta"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <p className="text-sm font-medium mb-2 text-gray-700">Type</p>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full border-gray-200">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Residence">Residence</SelectItem>
                  <SelectItem value="Apartment">Apartment</SelectItem>
                  <SelectItem value="Villa">Villa</SelectItem>
                  <SelectItem value="House">House</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <p className="text-sm font-medium mb-2 text-gray-700">Price</p>
              <Select
                value={`$${priceRange[0].toLocaleString()} - $${priceRange[1].toLocaleString()}`}
              >
                <SelectTrigger className="w-full border-gray-200">
                  <SelectValue placeholder="Price range" />
                </SelectTrigger>
                <SelectContent>
                  <div className="px-4 py-4">
                    <Slider
                      defaultValue={[1000, 500000]}
                      min={1000}
                      max={1000000}
                      step={1000}
                      onValueChange={(value) => setPriceRange(value)}
                      className="my-6"
                    />
                    <div className="flex justify-between text-sm text-gray-600 font-medium mt-2">
                      <span>${priceRange[0].toLocaleString()}</span>
                      <span>${priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </SelectContent>
              </Select>
            </div>

            <div>
              <p className="text-sm font-medium mb-2 text-gray-700">Location</p>
              <div className="relative">
                <Input
                  placeholder="Indonesia"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
                <i className="fas fa-map-marker-alt absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-2 text-gray-700">
                Find Specific Property
              </p>
              <div className="flex space-x-2">
                <div className="relative flex-1">
                  <Input
                    placeholder="Ex: hunan apart"
                    className="w-full pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                  <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                </div>
                <Button
                  variant="outline"
                  className="!rounded-button whitespace-nowrap cursor-pointer border-gray-300 hover:bg-gray-50"
                >
                  <i className="fas fa-sliders-h mr-2"></i>
                  Filter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Property Listings */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{searchTerm}</h2>
            <p className="text-gray-500 mt-1">
              We found <span className="font-medium text-blue-600">242</span>{" "}
              properties
            </p>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">Sort By:</span>
            <Select defaultValue="default">
              <SelectTrigger className="w-[160px] border-gray-200">
                <SelectValue placeholder="Default" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="overflow-hidden border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-[260px] overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
                <button
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute top-4 right-4 bg-white p-2.5 rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <i
                    className={`${
                      favoriteProperties.includes(property.id)
                        ? "fas text-red-500"
                        : "far"
                    } fa-heart text-gray-700`}
                  ></i>
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-20"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-900">
                    {property.name}
                  </h3>
                  <span className="font-bold text-lg text-blue-600">
                    ${property.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-gray-500 mb-4 flex items-center">
                  <i className="fas fa-map-marker-alt text-blue-500 mr-2"></i>
                  {property.location}
                </p>
                <div className="flex items-center justify-between text-gray-600 pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <i className="fas fa-bed mr-2 text-blue-500"></i>
                    <span>{property.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-bath mr-2 text-blue-500"></i>
                    <span>{property.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-vector-square mr-2 text-blue-500"></i>
                    <span>{property.area} m²</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button className="!rounded-button whitespace-nowrap cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-8 py-6">
            Load More Properties
          </Button>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Explore by Property Type
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our diverse range of properties to find the perfect match
              for your lifestyle and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Modern Villas",
                count: 124,
                icon: "fa-home",
                color: "bg-blue-500",
                image:
                  "https://readdy.ai/api/search-image?query=Modern%20luxury%20villa%20with%20clean%20architectural%20lines%2C%20large%20glass%20windows%2C%20infinity%20pool%2C%20surrounded%20by%20tropical%20landscape%2C%20professional%20real%20estate%20photography%20with%20perfect%20lighting%2C%20ultra%20high%20definition&width=400&height=300&seq=20&orientation=landscape",
              },
              {
                title: "Luxury Apartments",
                count: 89,
                icon: "fa-building",
                color: "bg-green-500",
                image:
                  "https://readdy.ai/api/search-image?query=Luxury%20apartment%20interior%20with%20modern%20furniture%2C%20floor%20to%20ceiling%20windows%2C%20city%20view%2C%20open%20concept%20living%20space%2C%20professional%20interior%20photography%20with%20perfect%20lighting%2C%20ultra%20high%20definition&width=400&height=300&seq=21&orientation=landscape",
              },
              {
                title: "Beachfront Properties",
                count: 56,
                icon: "fa-umbrella-beach",
                color: "bg-yellow-500",
                image:
                  "https://readdy.ai/api/search-image?query=Luxury%20beachfront%20property%20with%20infinity%20pool%20overlooking%20ocean%2C%20modern%20architecture%20with%20large%20windows%2C%20palm%20trees%2C%20sunset%20lighting%2C%20professional%20real%20estate%20photography%2C%20ultra%20high%20definition&width=400&height=300&seq=22&orientation=landscape",
              },
              {
                title: "Mountain Retreats",
                count: 37,
                icon: "fa-mountain",
                color: "bg-red-500",
                image:
                  "https://readdy.ai/api/search-image?query=Luxury%20mountain%20cabin%20with%20large%20windows%2C%20wooden%20elements%2C%20surrounded%20by%20pine%20trees%2C%20snow%20capped%20mountains%20in%20background%2C%20cozy%20exterior%20with%20outdoor%20fireplace%2C%20professional%20real%20estate%20photography%2C%20ultra%20high%20definition&width=400&height=300&seq=23&orientation=landscape",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-md cursor-pointer hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div
                      className={`${category.color} text-white w-12 h-12 rounded-full flex items-center justify-center mb-3`}
                    >
                      <i className={`fas ${category.icon} text-xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {category.title}
                    </h3>
                    <p className="text-gray-200">{category.count} Properties</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Cities */}
      <div className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Popular Locations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore properties in Indonesia's most sought-after cities and
            regions.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-5 mb-12 bg-gray-100 p-1">
            <TabsTrigger
              value="all"
              className="!rounded-button whitespace-nowrap cursor-pointer data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="jakarta"
              className="!rounded-button whitespace-nowrap cursor-pointer data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
            >
              Jakarta
            </TabsTrigger>
            <TabsTrigger
              value="bali"
              className="!rounded-button whitespace-nowrap cursor-pointer data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
            >
              Bali
            </TabsTrigger>
            <TabsTrigger
              value="yogyakarta"
              className="!rounded-button whitespace-nowrap cursor-pointer data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
            >
              Yogyakarta
            </TabsTrigger>
            <TabsTrigger
              value="surabaya"
              className="!rounded-button whitespace-nowrap cursor-pointer data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
            >
              Surabaya
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  city: "Jakarta",
                  properties: 156,
                  image:
                    "https://readdy.ai/api/search-image?query=Jakarta%20cityscape%20with%20modern%20skyscrapers%20and%20iconic%20landmarks%2C%20aerial%20view%20of%20business%20district%20with%20tall%20buildings%20and%20city%20lights%2C%20professional%20urban%20photography%20with%20dramatic%20sky%2C%20ultra%20high%20definition&width=600&height=400&seq=9&orientation=landscape",
                },
                {
                  city: "Bali",
                  properties: 124,
                  image:
                    "https://readdy.ai/api/search-image?query=Bali%20tropical%20paradise%20with%20traditional%20architecture%2C%20lush%20rice%20terraces%2C%20palm%20trees%20and%20ocean%20view%2C%20luxury%20villa%20with%20infinity%20pool%20overlooking%20natural%20landscape%2C%20professional%20travel%20photography%2C%20ultra%20high%20definition&width=600&height=400&seq=10&orientation=landscape",
                },
                {
                  city: "Yogyakarta",
                  properties: 98,
                  image:
                    "https://readdy.ai/api/search-image?query=Yogyakarta%20cultural%20cityscape%20with%20traditional%20Javanese%20architecture%2C%20ancient%20temples%20and%20palaces%2C%20surrounded%20by%20lush%20greenery%20and%20mountains%20in%20background%2C%20professional%20travel%20photography%2C%20ultra%20high%20definition&width=600&height=400&seq=11&orientation=landscape",
                },
                {
                  city: "Surabaya",
                  properties: 87,
                  image:
                    "https://readdy.ai/api/search-image?query=Surabaya%20modern%20cityscape%20with%20colonial%20architecture%2C%20bridges%20and%20waterfront%2C%20urban%20skyline%20with%20mix%20of%20historical%20and%20contemporary%20buildings%2C%20professional%20city%20photography%2C%20ultra%20high%20definition&width=600&height=400&seq=12&orientation=landscape",
                },
                {
                  city: "Bandung",
                  properties: 76,
                  image:
                    "https://readdy.ai/api/search-image?query=Bandung%20mountain%20city%20surrounded%20by%20volcanoes%20and%20tea%20plantations%2C%20colonial%20architecture%20with%20art%20deco%20buildings%2C%20modern%20urban%20development%20with%20lush%20green%20backdrop%2C%20professional%20landscape%20photography%2C%20ultra%20high%20definition&width=600&height=400&seq=13&orientation=landscape",
                },
                {
                  city: "Lombok",
                  properties: 65,
                  image:
                    "https://readdy.ai/api/search-image?query=Lombok%20island%20paradise%20with%20pristine%20beaches%2C%20crystal%20clear%20turquoise%20water%2C%20luxury%20beachfront%20villas%2C%20tropical%20landscape%20with%20palm%20trees%20and%20mountains%2C%20professional%20travel%20photography%2C%20ultra%20high%20definition&width=600&height=400&seq=14&orientation=landscape",
                },
              ].map((location, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-none shadow-md cursor-pointer group rounded-xl"
                >
                  <div className="relative h-[280px]">
                    <img
                      src={location.image}
                      alt={location.city}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">
                        {location.city}
                      </h3>
                      <p className="flex items-center text-gray-200">
                        <i className="fas fa-home mr-2"></i>
                        {location.properties} Properties
                      </p>
                      <Button
                        variant="outline"
                        className="mt-4 border-white text-white hover:bg-white/20 !rounded-button whitespace-nowrap cursor-pointer w-max"
                      >
                        View Properties
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Other tab contents would be similar */}
          <TabsContent value="jakarta" className="mt-0">
            {/* Jakarta specific content */}
          </TabsContent>
        </Tabs>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-10 text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {[
                  {
                    question: "What types of properties do you offer?",
                    answer:
                      "We offer a wide range of properties including luxury villas, modern apartments, beachfront homes, and mountain retreats across Indonesia's most desirable locations.",
                  },
                  {
                    question: "How do I schedule a property viewing?",
                    answer:
                      "You can schedule a property viewing by contacting us directly through our website, calling our office, or booking a call with one of our agents using the 'Book a Call' button in the header.",
                  },
                  {
                    question: "What financing options are available?",
                    answer:
                      "We offer flexible payment plans and can connect you with our partner banks for mortgage options. We also occasionally offer special discounts and promotions for certain properties.",
                  },
                  {
                    question: "Do you handle property management?",
                    answer:
                      "Yes, we provide comprehensive property management services for investors and homeowners who wish to rent out their properties, including maintenance, tenant screening, and rent collection.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-lg font-bold mb-3 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              <Button className="mt-10 !rounded-button whitespace-nowrap cursor-pointer bg-blue-600 hover:bg-blue-700 text-white">
                View All FAQs
              </Button>
            </div>

            <div className="relative">
              <img
                src={faqImage}
                alt="Aruna Real Estate"
                className="w-full rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white p-4 rounded-full">
                    <i className="fas fa-headset text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Need Help?</h3>
                    <p className="text-gray-600">Contact our support team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience finding their
            dream homes with Aruna.
          </p>
        </div>

        {/* <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 5000 }}
          className="testimonial-swiper pb-14"
        >
          {[
            {
              name: "Michael Thompson",
              role: "Homeowner in Jakarta",
              testimonial:
                "Working with Aruna was a seamless experience from start to finish. Their team's expertise and attention to detail made finding our dream home a pleasure.",
              avatar:
                "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20person%20in%20business%20attire%20with%20neutral%20background%2C%20high%20quality%20portrait%20photography%20with%20soft%20lighting%2C%20corporate%20style%2C%20ultra%20high%20definition&width=100&height=100&seq=15&orientation=squarish",
            },
            {
              name: "Sarah Johnson",
              role: "Property Investor",
              testimonial:
                "As an international investor, I needed a team I could trust. Aruna exceeded my expectations with their market knowledge and personalized service.",
              avatar:
                "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20person%20with%20confident%20expression%2C%20business%20casual%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait%20photography%20with%20soft%20lighting%2C%20ultra%20high%20definition&width=100&height=100&seq=16&orientation=squarish",
            },
            {
              name: "David Chen",
              role: "First-time Buyer",
              testimonial:
                "Being a first-time homebuyer was intimidating, but Aruna guided me through every step of the process with patience and expertise. Highly recommended!",
              avatar:
                "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20person%20smiling%2C%20casual%20smart%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait%20photography%20with%20soft%20lighting%2C%20friendly%20expression%2C%20ultra%20high%20definition&width=100&height=100&seq=17&orientation=squarish",
            },
            {
              name: "Emma Wilson",
              role: "Luxury Villa Owner",
              testimonial:
                "Aruna helped me find a stunning beachfront property that exceeded all my expectations. Their attention to my specific requirements was impressive.",
              avatar:
                "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20person%20with%20elegant%20appearance%2C%20business%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait%20photography%20with%20soft%20lighting%2C%20sophisticated%20look%2C%20ultra%20high%20definition&width=100&height=100&seq=18&orientation=squarish",
            },
          ].map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card className="h-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-xl p-1">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-6">
                    <div className="flex text-yellow-400 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i key={star} className="fas fa-star"></i>
                      ))}
                    </div>
                    <p className="text-gray-600 italic leading-relaxed">
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                  <div className="mt-auto flex items-center pt-6 border-t border-gray-100">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-blue-100"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-blue-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-blue-100 text-lg">
            Contact our team of experts today and take the first step toward
            finding your perfect property in Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer px-8 py-6 text-base">
              <i className="fas fa-search mr-2"></i>
              Browse Properties
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 !rounded-button whitespace-nowrap cursor-pointer px-8 py-6 text-base"
            >
              <i className="fas fa-phone-alt mr-2"></i>
              Contact an Agent
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center mb-8">
                <i className="fas fa-home text-2xl mr-2 text-blue-400"></i>
                <span className="text-xl font-bold">Aruna</span>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Premium real estate solutions across Indonesia, connecting
                discerning clients with exceptional properties since 2010.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors cursor-pointer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer flex items-center"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 text-blue-400"></i>{" "}
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer flex items-center"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 text-blue-400"></i>{" "}
                    Properties
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer flex items-center"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 text-blue-400"></i>{" "}
                    Our Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer flex items-center"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 text-blue-400"></i>{" "}
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer flex items-center"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 text-blue-400"></i>{" "}
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer flex items-center"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 text-blue-400"></i>{" "}
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">
                Popular Locations
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer flex items-center"
                  >
                    <i className="fas fa-map-marker-alt text-xs mr-2 text-blue-400"></i>{" "}
                    Jakarta
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer flex items-center"
                  >
                    <i className="fas fa-map-marker-alt text-xs mr-2 text-blue-400"></i>{" "}
                    Bali
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer flex items-center"
                  >
                    <i className="fas fa-map-marker-alt text-xs mr-2 text-blue-400"></i>{" "}
                    Yogyakarta
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer flex items-center"
                  >
                    <i className="fas fa-map-marker-alt text-xs mr-2 text-blue-400"></i>{" "}
                    Surabaya
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer flex items-center"
                  >
                    <i className="fas fa-map-marker-alt text-xs mr-2 text-blue-400"></i>{" "}
                    Bandung
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer flex items-center"
                  >
                    <i className="fas fa-map-marker-alt text-xs mr-2 text-blue-400"></i>{" "}
                    Lombok
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1.5 mr-3 text-blue-400"></i>
                  <span className="text-gray-400">
                    123 Sudirman Street, Jakarta, Indonesia
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone-alt mr-3 text-blue-400"></i>
                  <span className="text-gray-400">+62 21 1234 5678</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-3 text-blue-400"></i>
                  <span className="text-gray-400">
                    info@aruna-realestate.com
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-clock mr-3 text-blue-400"></i>
                  <span className="text-gray-400">
                    Mon - Fri: 9:00 AM - 6:00 PM
                  </span>
                </li>
              </ul>
              <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white !rounded-button whitespace-nowrap cursor-pointer">
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </Button>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Aruna Real Estate. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm cursor-pointer"
              >
                Terms of Service
              </a>
              <div className="flex items-center space-x-3">
                <i className="fab fa-cc-visa text-xl text-gray-400"></i>
                <i className="fab fa-cc-mastercard text-xl text-gray-400"></i>
                <i className="fab fa-cc-paypal text-xl text-gray-400"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
