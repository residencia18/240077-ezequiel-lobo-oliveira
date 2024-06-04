using Xunit;
using NSubstitute;

namespace Atividade14.Tests
{
    public class EventHandlerTests
    {
        [Fact]
        public void HandleEvent_SendsEmailWithCorrectParameters()
        {
            var mockEmailService = Substitute.For<IEmailService>();
            var eventMessage = "Event occurred";

            var eventHandler = new EventHandler(mockEmailService);

            eventHandler.HandleEvent(eventMessage);

            mockEmailService.Received(1).SendEmail("test@example.com", "Event Occurred", eventMessage);
        }
    }
}
