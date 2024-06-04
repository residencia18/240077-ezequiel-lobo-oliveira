using System;
using System.Collections.Generic;
using Xunit;

namespace Atividade08.Tests
{
    public class StatisticsTests
    {
        [Fact]
        public void CalculateAverage_WithValidNumbers_ReturnsCorrectAverage()
        {
            var statistics = new Statistics();
            var numbers = new List<int> { 1, 2, 3, 4, 5 };
            var average = statistics.CalculateAverage(numbers);
            Assert.Equal(3, average);
        }

        [Fact]
        public void CalculateAverage_WithEmptyList_ThrowsArgumentException()
        {
            var statistics = new Statistics();
            var numbers = new List<int>();
            var exception = Assert.Throws<ArgumentException>(() => statistics.CalculateAverage(numbers));
            Assert.Equal("The list of numbers cannot be empty", exception.Message);
        }

        [Fact]
        public void CalculateAverage_WithNullList_ThrowsArgumentException()
        {
            var statistics = new Statistics();
            var exception = Assert.Throws<ArgumentException>(() => statistics.CalculateAverage(null));
            Assert.Equal("The list of numbers cannot be empty", exception.Message);
        }

        [Fact]
        public void CalculateAverage_WithSingleNumber_ReturnsThatNumber()
        {
            var statistics = new Statistics();
            var numbers = new List<int> { 10 };
            var average = statistics.CalculateAverage(numbers);
            Assert.Equal(10, average);
        }

        [Fact]
        public void CalculateAverage_WithNegativeNumbers_ReturnsCorrectAverage()
        {
            var statistics = new Statistics();
            var numbers = new List<int> { -1, -2, -3, -4, -5 };
            var average = statistics.CalculateAverage(numbers);
            Assert.Equal(-3, average);
        }
    }
}
