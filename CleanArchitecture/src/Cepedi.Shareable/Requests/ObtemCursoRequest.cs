namespace Cepedi.Shareable.Requests;
public record ObtemCursoRequest(int idCurso);
﻿using Cepedi.Shareable.Responses;
using MediatR;

namespace Cepedi.Shareable.Requests;
public class ObtemCursoRequest : IRequest<ObtemCursoResponse> {
    public int IdCurso { get; set; }
}