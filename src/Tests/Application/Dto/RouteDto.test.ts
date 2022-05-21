import {RouteDto} from "../../../Application/Dto/RouteDto";


describe('Creating a RouteDto', () => {
    test('should create RouteDto', () => {
        let route = new RouteDto();
        route.id = "11";
        route.name = "SCZCBBA";
        route.distance = 2323;
        route.time = new Date("2020-12-12");
        route.origin = "SCZ";
        route.destiny = "CBBA";
        expect(route.id).toBe("SCZCBBA");
        expect(route.name).toBe("11");
        expect(route.distance).toBe(2323);
        expect(route.time).toBe(new Date("2020-12-12"));
        expect(route.origin).toBe("SCZ");
        expect(route.destiny).toBe("CBBA");
    });
});