<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\HydroponicParameter
 *
 * @property int $id
 * @property int $hydroponic_plant_id
 * @property \Illuminate\Support\Carbon $measurement_date
 * @property string $measurement_time
 * @property string $nutrient_type
 * @property float $ppm_concentration
 * @property float $ph_level
 * @property float $water_temperature
 * @property string|null $notes
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @property-read \App\Models\HydroponicPlant $hydroponicPlant
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicParameter newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicParameter newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicParameter query()
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicParameter whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicParameter whereHydroponicPlantId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicParameter whereMeasurementDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicParameter whereMeasurementTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicParameter whereNutrientType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicParameter wherePpmConcentration($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicParameter wherePhLevel($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicParameter whereWaterTemperature($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicParameter whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicParameter whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicParameter whereUpdatedAt($value)

 * 
 * @mixin \Eloquent
 */
class HydroponicParameter extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'hydroponic_plant_id',
        'measurement_date',
        'measurement_time',
        'nutrient_type',
        'ppm_concentration',
        'ph_level',
        'water_temperature',
        'notes',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'measurement_date' => 'date',
        'ppm_concentration' => 'decimal:1',
        'ph_level' => 'decimal:1',
        'water_temperature' => 'decimal:1',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the hydroponic plant that owns the parameter.
     */
    public function hydroponicPlant(): BelongsTo
    {
        return $this->belongsTo(HydroponicPlant::class);
    }
}