﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MisterRobotoArigato.Data;

namespace MisterRobotoArigato.Migrations
{
    [DbContext(typeof(RobotoDbContext))]
    [Migration("20180728221157_sprint3")]
    partial class sprint3
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.1-rtm-30846")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MisterRobotoArigato.Models.Address", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("City")
                        .IsRequired();

                    b.Property<string>("Country")
                        .IsRequired();

                    b.Property<string>("FirstName")
                        .IsRequired();

                    b.Property<string>("LastName")
                        .IsRequired();

                    b.Property<string>("State")
                        .IsRequired();

                    b.Property<string>("Street")
                        .IsRequired();

                    b.Property<string>("Street2");

                    b.Property<string>("UserID")
                        .IsRequired();

                    b.Property<string>("Zip")
                        .IsRequired();

                    b.HasKey("ID");

                    b.ToTable("Addresses");
                });

            modelBuilder.Entity("MisterRobotoArigato.Models.Basket", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CustomerEmail");

                    b.HasKey("ID");

                    b.ToTable("Baskets");
                });

            modelBuilder.Entity("MisterRobotoArigato.Models.BasketItem", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("BasketID");

                    b.Property<string>("CustomerEmail");

                    b.Property<string>("ImgUrl");

                    b.Property<int>("ProductID");

                    b.Property<string>("ProductName");

                    b.Property<int>("Quantity");

                    b.Property<decimal>("UnitPrice");

                    b.HasKey("ID");

                    b.HasIndex("BasketID");

                    b.ToTable("BasketItems");
                });

            modelBuilder.Entity("MisterRobotoArigato.Models.Order", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AddressID");

                    b.Property<decimal>("DiscountAmt");

                    b.Property<string>("DiscountName");

                    b.Property<decimal>("DiscountPercent");

                    b.Property<string>("OrderDate");

                    b.Property<string>("Shipping");

                    b.Property<decimal>("Subtotal");

                    b.Property<decimal>("Total");

                    b.Property<int>("TotalItemQty");

                    b.Property<string>("UserID");

                    b.HasKey("ID");

                    b.HasIndex("AddressID");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("MisterRobotoArigato.Models.OrderItem", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ImgUrl");

                    b.Property<int>("OrderID");

                    b.Property<int>("ProductID");

                    b.Property<string>("ProductName");

                    b.Property<int>("Quantity");

                    b.Property<decimal>("UnitPrice");

                    b.Property<string>("UserID");

                    b.HasKey("ID");

                    b.HasIndex("OrderID");

                    b.ToTable("OrderItems");
                });

            modelBuilder.Entity("MisterRobotoArigato.Models.Product", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description");

                    b.Property<string>("ImgUrl");

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<decimal>("Price");

                    b.Property<string>("SKU")
                        .IsRequired();

                    b.HasKey("ID");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("MisterRobotoArigato.Models.BasketItem", b =>
                {
                    b.HasOne("MisterRobotoArigato.Models.Basket")
                        .WithMany("BasketItems")
                        .HasForeignKey("BasketID");
                });

            modelBuilder.Entity("MisterRobotoArigato.Models.Order", b =>
                {
                    b.HasOne("MisterRobotoArigato.Models.Address", "Address")
                        .WithMany()
                        .HasForeignKey("AddressID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("MisterRobotoArigato.Models.OrderItem", b =>
                {
                    b.HasOne("MisterRobotoArigato.Models.Order")
                        .WithMany("OrderItems")
                        .HasForeignKey("OrderID")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
