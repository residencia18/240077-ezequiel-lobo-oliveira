using System;
using Xunit;

namespace Atividade13.Tests
{
    public class FactorialCalculatorTests
    {
        [Theory]
        [InlineData(0, 1)]
        [InlineData(1, 1)]
        [InlineData(2, 2)]
        [InlineData(3, 6)]
        [InlineData(4, 24)]
        [InlineData(5, 120)]
        public void Calculate_ReturnsCorrectFactorial(int n, int expected)
        {
            var calculator = new FactorialCalculator();
            var result = calculator.Calculate(n);
            Assert.Equal(expected, result);
        }

        [Fact]
        public void Calculate_WithNegativeNumber_ThrowsArgumentException()
        {
            var calculator = new FactorialCalculator();
            var exception = Assert.Throws<ArgumentException>(() => calculator.Calculate(-1));
            Assert.Equal("Number must be non-negative", exception.Message);
        }
    }
}
