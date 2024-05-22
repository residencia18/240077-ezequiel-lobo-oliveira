﻿using Cepedi.Banco.Pessoa.Compartilhado.Enums;
using Cepedi.Banco.Pessoa.Compartilhado.Excecoes;
using Cepedi.Banco.Pessoa.Compartilhado.Exceptions;
using Cepedi.Compartilhado.Exceptions;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using OperationResult;

namespace Cepedi.Banco.Pessoa.Api.Controllers;
public class BaseController : ControllerBase
{
    private readonly IMediator _mediator;

    public BaseController(IMediator mediator)
    {
        _mediator = mediator;
    }

    protected async Task<ActionResult> SendCommand(IRequest<Result> request, int statusCode = 200)
        => await _mediator.Send(request) switch
        {
            (true, _) => StatusCode(statusCode),
            var (_, error) => HandleError(error!)
        };

    protected async Task<ActionResult<T>> SendCommand<T>(IRequest<Result<T>> request, int statusCode = 200)
        => await _mediator.Send(request).ConfigureAwait(false) switch
        {
            (true, var result, _) => StatusCode(statusCode, result),
            var (_, res, error) => HandleError(error!)
        };

    protected ActionResult HandleError(Exception error) => error switch
    {
        MinimoUmEnderecoPrincipalException e => Conflict(FormatErrorMessage(BancoCentralMensagemErrors.MinimoUmEnderecoPrincipal)),
        MinimoUmTelefonePrincipalException e => Conflict(FormatErrorMessage(BancoCentralMensagemErrors.MinimoUmTelefonePrincipal)),
        PessoaNaoEncontradaExcecao e => NotFound(FormatErrorMessage(BancoCentralMensagemErrors.PessoaNaoEncontrada)),
        EnderecoNaoEncontradoExcecao e => NotFound(FormatErrorMessage(BancoCentralMensagemErrors.EnderecoNaoEncontrado)),
        TelefoneNaoEncontradoExcecao e => NotFound(FormatErrorMessage(BancoCentralMensagemErrors.TelefoneNaoEncontrado)),
        CpfJaExisteExcecao e => Conflict(FormatErrorMessage(BancoCentralMensagemErrors.CpfJaExiste)),
        RequestInvalidaException e => BadRequest(FormatErrorMessage(BancoCentralMensagemErrors.DadosInvalidos, e.Erros)),
        SemResultadosExcecao e => NoContent(),
        _ => BadRequest(FormatErrorMessage(BancoCentralMensagemErrors.Generico))
    };

    private ResultadoErro FormatErrorMessage(ResultadoErro responseErro, IEnumerable<string>? errors = null)
    {
        if (errors is not null)
        {
            responseErro.Descricao = $"{responseErro.Descricao} : {string.Join("; ", errors!)}";
        }

        return responseErro;
    }
}
