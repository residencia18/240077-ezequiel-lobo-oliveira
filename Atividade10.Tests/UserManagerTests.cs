using Xunit;
using NSubstitute;

namespace Atividade10.Tests
{
    public class UserManagerTests
    {
        [Fact]
        public void FetchUserInfo_WithValidUserId_ReturnsUserInfo()
        {
            var mockUserService = Substitute.For<IUserService>();
            var expectedUser = new User("Ezequiel Lobo", "Ezequiel.Lobo@gmail.com");
            mockUserService.GetUserInfo(1).Returns(expectedUser);

            var userManager = new UserManager(mockUserService);
            var result = userManager.FetchUserInfo(1);

            Assert.Equal(expectedUser.Name, result.Name);
            Assert.Equal(expectedUser.Email, result.Email);
        }

        [Fact]
        public void FetchUserInfo_CallsGetUserInfoWithCorrectUserId()
        {
            var mockUserService = Substitute.For<IUserService>();
            var userManager = new UserManager(mockUserService);
            
            userManager.FetchUserInfo(1);

            mockUserService.Received(1).GetUserInfo(1);
        }
    }
}
